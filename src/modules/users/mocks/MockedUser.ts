import { GenderTypes } from '../models/GenderTypes';
import User from '../models/User';

export const MockedUser: User = {
  name: 'Antoni',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  telephone: '+55 51 3626-2001',
  gender: GenderTypes.male,
  status: true,
  id: '123',
  profilePicture: 'test',
  address: 'Test street',
  docNumber: BigInt(12345678910),
  docPictureBack: 'test-back-picture',
  docPicture: 'test-picture',
  residenceProofPicture: 'residence-picture',
  isBlocked: false,
  userQuiz: {
    alreadyUseBPR: false,
  },
};
