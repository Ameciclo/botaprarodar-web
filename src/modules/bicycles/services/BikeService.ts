import { AxiosError } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Bike from 'modules/bicycles/models/Bike';
import { User } from 'modules/users/models';
import api from 'shared/services/api';
import DateUtils from 'shared/utils/DateUtils';
import DashboardService from 'modules/dashboard/services/DashboardService';
import { storage } from 'shared/services/firebase';
import AmountBikesPerCommunity from '../utils/AmountBikesPerCommunity';
import BikeQuiz from '../models/types/BikeQuiz';

const BikeService = {
  async uploadBikeImage(file: File) {
    const storageRef = storage.ref(`community/bike/${file.name}`);

    const snapshot = await storageRef.put(file);

    const downloadUrl = await snapshot.ref.getDownloadURL();

    return downloadUrl;
  },

  async createBike(body: any) {
    const photoUrl = await BikeService.uploadBikeImage(body.photoThumbnailPath);

    const payload = {
      id: uuidv4(),
      name: body.name.trim(),
      serialNumber: body.serialNumber.trim(),
      orderNumber: Number(body.orderNumber),
      photoThumbnailPath: photoUrl,
      communityId: body.communityId,
      available: true,
      inUse: false,
      photoPath: photoUrl,
      withdraws: null,
      devolutions: null,
      withdrawToUser: '',
      path: 'bikes',
      createDate: new Date(),
    };

    const { data } = await api.put(`/bikes/${payload.id}.json`, payload);

    if (data) {
      await DashboardService.updateBikeQuantity();
    }

    return data;
  },

  async getAllBikes() {
    const { data } = await api.get('/bikes.json');

    const bikes: Bike[] = mapBikesData(data);

    return bikes;
  },

  async getBikeById(id: string) {
    const { data } = await api.get(`/bikes/${id}.json`);
    return data;
  },

  async getBikesPerCommunity(
    communityId: string,
    actionType: string | null | undefined,
  ): Promise<Bike[]> {
    try {
      const { data } = await api.get('/bikes.json');
      if (data) {
        const bikePerCommunity: Bike[] = mapBikesData(data).filter(
          bike =>
            bike.communityId === communityId &&
            (actionType
              ? (actionType === 'devolution' &&
                  bike.inUse &&
                  bike.withdrawToUser) ||
                (actionType === 'withdraw' && !bike.inUse)
              : true),
        );
        return bikePerCommunity;
      }
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
    return [];
  },

  async getAmountFilteredBikesPerCommunity(
    communityId: string,
  ): Promise<AmountBikesPerCommunity> {
    try {
      let total = 0;
      let available = 0;
      let borrowed = 0;
      const { data } = await api.get('/bikes.json');
      if (data) {
        const bikePerCommunity: Bike[] = mapBikesData(data).filter(
          bike => bike.communityId === communityId,
        );
        total = bikePerCommunity.length;

        borrowed = bikePerCommunity.filter(
          bike => bike.inUse && bike.withdrawToUser,
        ).length;

        available = total - borrowed;
      }

      return {
        total,
        available,
        borrowed,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  },

  async updateBike(bike: Bike, user: User | undefined) {
    if (bike.available && !user?.isBlocked) {
      const newBike = await this.getBikeById(bike.id);
      newBike.withdrawToUser = user ? user.id : '';
      newBike.inUse = !!user;
      const { data } = await api.put(`/bikes/${newBike.id}.json`, newBike);
      return data;
    }

    return {};
  },

  async updateBikeWithdraws(bike: Bike, user: User) {
    if (
      bike.available &&
      bike.inUse &&
      bike.withdrawToUser === user.id &&
      !user.isBlocked
    ) {
      const id = uuidv4();
      const withdraw = {
        date: new Date().toLocaleString('pt-BR'),
        id,
        user,
      };
      const { data } = await api.put(
        `/bikes/${bike.id}/withdraws/${id}.json`,
        withdraw,
      );
      return data;
    }
    return {};
  },

  async updateBikeDevolutions(
    bike: Bike,
    user: User,
    withdrawId: string,
    quiz: BikeQuiz,
  ) {
    if (!bike.inUse && bike.available) {
      const id = uuidv4();
      const devolution = {
        date: new Date().toLocaleString('pt-BR'),
        id,
        quiz,
        user,
        withdrawId,
      };
      const { data } = await api.put(
        `/bikes/${bike.id}/devolutions/${id}.json`,
        devolution,
      );
      return data;
    }

    return {};
  },

  async lendBike(user: User | undefined, bike: Bike | undefined) {
    let newBike;
    if (user && user.id && bike && bike.id) {
      try {
        newBike = await this.updateBike(bike, user);
        if (newBike.withdraws === undefined) {
          newBike.withdraws = [];
        }
        const newWithdraw = await this.updateBikeWithdraws(newBike, user);
        Object.assign(newBike.withdraws, { [newWithdraw.id]: newWithdraw });
        await DashboardService.updateBikeUse('lend');
        return newBike;
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.message);
      }
    }
    return {};
  },

  async returnBike(
    user: User | undefined,
    bike: Bike | undefined,
    bikeQuiz: BikeQuiz,
  ) {
    let newBike;
    let userWithdraws;
    if (user && user.id && bike && bike.id) {
      try {
        newBike = await this.updateBike(bike, undefined);
        let withdrawId;
        if (bike && bike.withdraws) {
          userWithdraws = bike.withdraws.filter(
            withdraw => withdraw.user.id === user.id,
          );
        }

        if (userWithdraws.length === 1) {
          withdrawId = userWithdraws[0].id;
        } else {
          userWithdraws = userWithdraws.map(withdraw => {
            const tempWithdraw = { ...withdraw };
            tempWithdraw.date = DateUtils.localeDateStringToDate(
              tempWithdraw.date,
            );
            return tempWithdraw;
          });

          const userWithdrawsDates = userWithdraws.map(
            withdraw => withdraw.date,
          );

          const maxDate = DateUtils.maxDate(userWithdrawsDates);

          withdrawId = userWithdraws.filter(
            withdraw => withdraw.date.getTime() === maxDate.getTime(),
          )[0].id;
        }

        const newDevolution = await this.updateBikeDevolutions(
          newBike,
          user,
          withdrawId,
          bikeQuiz,
        );
        Object.assign(newBike.devolutions, {
          [newDevolution.id]: newDevolution,
        });
        await DashboardService.updateBikeUse('return', bikeQuiz);
        return newBike;
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.message);
      }
    }
    return {};
  },
};

const mapBikesData = (bikesData: any): Bike[] => {
  const data: Bike[] = Object.keys(bikesData).map(id => {
    const bike = bikesData[id];
    if (bike.devolutions) {
      const devolutions = Object.keys(bike.devolutions).map(devolutionId => ({
        id: devolutionId,
        ...bike.devolutions[devolutionId],
      }));
      bike.devolutions = devolutions;
    }

    if (bike.withdraws) {
      const withdraws = Object.keys(bike.withdraws).map(withdrawId => ({
        id: withdrawId,
        ...bike.withdraws[withdrawId],
      }));
      bike.withdraws = withdraws;
    }

    return { id, ...bike };
  });
  return data;
};

export default BikeService;
