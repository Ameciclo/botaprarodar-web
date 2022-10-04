import Bike from '../models/Bike';
import { MockedFirstUser } from '../../users/mocks/MockedUser';
import Devolution from '../models/Devolution';
import BikeWithdraw from '../models/BikeWithdraw';
import AmountBikesPerCommunity from '../utils/AmountBikesPerCommunity';

interface MockedBikeParams {
  communityId?: string;
  available?: boolean;
  inUse?: boolean;
  userId?: string;
  orderNumber?: number;
  name?: string;
  serialNumber?: string;
  photoThumbnailPath?: string;
}

const mockedBikeDevolutions = (): Devolution => ({
  date: '01/09/2021 12:18:18',
  id: '-WPSD2ZVXgcGT6Z16rcuw',
  quiz: {
    destination: 'Hogwarts',
    giveRide: 'Sim',
    problemsDuringRiding: 'Não',
    reason: 'Seu local de estudo',
  },
  user: MockedFirstUser,
  withdrawId: '123',
});

const mockedBikeWidraws = (): BikeWithdraw => ({
  date: '01/09/2021 12:08:18',
  id: '123',
  user: MockedFirstUser,
});

export const mockedBike = (params: MockedBikeParams = {}): Bike => {
  return {
    available: params.available === undefined ? true : params.available,
    communityId: params.communityId || '-MLDOXs3p35DEHg0gdUU',
    createdDate: '09/08/2021',
    withdraws: [mockedBikeWidraws()],
    devolutions: [mockedBikeDevolutions()],
    id: '-MgfYTcrUFsX_NXhhvL2',
    inUse: params.inUse || false,
    name: params.name || 'Bike 1',
    orderNumber: params.orderNumber || 12345,
    path: 'bikes',
    photoPath:
      'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_1628523317.jpg?alt=media&token=03ebd3b4-723d-4c4e-8dca-7c647ef2cbf3',
    photoThumbnailPath:
      params.photoThumbnailPath ||
      'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_thumb_1628523317.jpg?alt=media&token=fa5fa903-6c62-4d61-8378-62e624030a01',
    serialNumber: params.serialNumber || '12345',
    withdrawToUser: params.inUse ? params.userId || 'user' : '',
  };
};

export const mockedBikes = (): Bike[] => {
  return [mockedBike(), mockedBike()];
};

export const MockedAmountsBikesPerCommunity: AmountBikesPerCommunity = {
  available: 3,
  borrowed: 2,
  total: 5,
};
