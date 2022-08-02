import Bike from 'modules/bicycles/models/Bike';
import api from 'shared/services/api';
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
    filterType?: string,
  ) {
    const { data } = await api.get('/bikes.json');
    return data.length;
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
