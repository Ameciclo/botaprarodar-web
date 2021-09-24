import { GenderTypes } from '../models/GenderTypes';
import User from '../models/User';

export const MockedFirstUser: User = {
  name: 'Antoni',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  age: '5',
  income: 'Entre 350 e 500',
  telephone: '+55 51 3626-2001',
  gender: GenderTypes.Masculino,
  status: true,
  id: '123',
  profilePicture: 'test',
  address: 'Test street',
  docNumber: BigInt(12345678910),
  docPictureBack: 'test-back-picture',
  docPicture: 'test-picture',
  residenceProofPicture: 'residence-picture',
  isBlocked: false,
  racial: 'Parda',
  schooling: 'Ensino médio completo',
  userQuiz: {
    alreadyUseBPR: false,
  },
};

export const MockedSecondUser: User = {
  name: 'Antonia',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  telephone: '+55 51 3626-2001',
  gender: GenderTypes.Feminino,
  age: '40',
  income: 'Entre 750 e 1100',
  status: true,
  id: '321',
  profilePicture: 'test',
  address: 'Test street',
  docNumber: BigInt(12345678910),
  docPictureBack: 'test-back-picture',
  docPicture: 'test-picture',
  residenceProofPicture: 'residence-picture',
  isBlocked: false,
  racial: 'Negra',
  schooling: 'Ensino médio incompleto',
  userQuiz: {
    alreadyUseBPR: false,
  },
};
