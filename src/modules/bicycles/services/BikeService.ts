import Bike from 'modules/bicycles/models/Bike';
import api from 'shared/services/api';
import axios, { AxiosError } from 'axios';
import { database } from 'shared/services/firebase';
import AmountBikesPerCommunity from '../utils/AmountBikesPerCommunity';

const BikeService = {
  async getAllBikes() {
    const { data } = await api.get('/bikes.json');

    const bikes: Bike[] = mapBikesData(data);

    return bikes;
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
        const bikePerCommunity: Bike[] = data.filter(
          bike => bike.communityId == communityId,
        );

        total = bikePerCommunity.length;
        borrowed = bikePerCommunity.filter(bike => !bike.available).length;

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
