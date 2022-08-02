import Bike from '../models/Bike';
import { MockedFirstUser } from '../../users/mocks/MockedUser';

export const MockedBikeOfXPTOCommunity: Bike = {
  available: false,
  communityId: '-MLDOXs3p35DEHg0gdUU',
  createdDate: '09/08/2021',
  withdraws: [
    {
      date: '01/09/2021 12:08:18',
      id: '123',
      user: MockedFirstUser,
    },
    {
      date: '01/09/2021 12:08:18',
      id: '456',
      user: MockedFirstUser,
    },
    {
      date: '01/09/2021 12:08:18',
      id: '789',
      user: MockedFirstUser,
    },
  ],
  devolutions: [
    {
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
    },
    {
      date: '01/09/2021 12:28:18',
      id: '-WPSD2ZVXgcGT6Z16rcuw',
      quiz: {
        destination: 'Hogwarts',
        giveRide: 'Sim',
        problemsDuringRiding: 'Não',
        reason: 'Seu local de estudo',
      },
      user: MockedFirstUser,
      withdrawId: '456',
    },
    {
      date: '01/09/2021 12:40:18',
      id: '-WPSD2ZVXgcGT6Z16rcuw',
      quiz: {
        destination: 'Hogwarts',
        giveRide: 'Sim',
        problemsDuringRiding: 'Não',
        reason: 'Seu local de estudo',
      },
      user: MockedFirstUser,
      withdrawId: '789',
    },
  ],
  id: '-MgfYTcrUFsX_NXhhvL2',
  inUse: false,
  name: 'Bike 1',
  orderNumber: 12345,
  path: 'bikes',
  photoPath:
    'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_1628523317.jpg?alt=media&token=03ebd3b4-723d-4c4e-8dca-7c647ef2cbf3',
  photoThumbnailPath:
    'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_thumb_1628523317.jpg?alt=media&token=fa5fa903-6c62-4d61-8378-62e624030a01',
  serialNumber: '12345',
  withdrawToUser: '',
};

export const MockedBikeOfTestCommunity: Bike = {
  available: true,
  communityId: '-MLy8y1-5v5GLg7Z428y',
  createdDate: '09/08/2021',
  withdraws: [
    {
      date: '01/09/2021 12:08:18',
      id: '123',
      user: MockedFirstUser,
    },
    {
      date: '01/09/2021 12:08:18',
      id: '456',
      user: MockedFirstUser,
    },
    {
      date: '01/09/2021 12:08:18',
      id: '789',
      user: MockedFirstUser,
    },
  ],
  devolutions: [
    {
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
    },
    {
      date: '01/09/2021 12:28:18',
      id: '-WPSD2ZVXgcGT6Z16rcuw',
      quiz: {
        destination: 'Hogwarts',
        giveRide: 'Sim',
        problemsDuringRiding: 'Não',
        reason: 'Seu local de estudo',
      },
      user: MockedFirstUser,
      withdrawId: '456',
    },
    {
      date: '01/09/2021 12:40:18',
      id: '-WPSD2ZVXgcGT6Z16rcuw',
      quiz: {
        destination: 'Hogwarts',
        giveRide: 'Sim',
        problemsDuringRiding: 'Não',
        reason: 'Seu local de estudo',
      },
      user: MockedFirstUser,
      withdrawId: '789',
    },
  ],
  id: '-MgfYTcrUFsX_NXhhvL2',
  inUse: false,
  name: 'Bike 2',
  orderNumber: 12345,
  path: 'bikes',
  photoPath:
    'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_1628523317.jpg?alt=media&token=03ebd3b4-723d-4c4e-8dca-7c647ef2cbf3',
  photoThumbnailPath:
    'https://firebasestorage.googleapis.com/v0/b/bpr-dev.appspot.com/o/community%2Fbike%2F12345%20_thumb_1628523317.jpg?alt=media&token=fa5fa903-6c62-4d61-8378-62e624030a01',
  serialNumber: '12345',
  withdrawToUser: '',
};
