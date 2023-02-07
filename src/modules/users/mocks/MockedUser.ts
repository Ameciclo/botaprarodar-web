import { GenderEnum, IncomeEnum } from 'modules/users/models/enums';
import User from '../models/User';

export const mockedUser = (): User => ({
  name: 'Antoni',
  createDate: '29-03-2011',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  age: '5',
  income: IncomeEnum.notInformed,
  telephone: '+55 51 3626-2001',
  gender: GenderEnum.notDeclared,
  status: true,
  id: '123',
  profilePicture: 'test',
  address: 'Test street',
  isBlocked: false,
  racial: '',
  schooling: '',
  schoolingStatus: '',
  userQuiz: {
    alreadyUseBPR: false,
    alreadyUseBPROpenQuestion: 'Trabalho',
    motivation: 5,
    motivationOpenQuestion: 'trabalho',
    alreadyAccidentVictim: true,
    problemsOnWayOpenQuestion: 'Não',
    timeOnWayOpenQuestion: '50min',
  },
});
export const mockedSecoundUser = (): User => ({
  ...mockedUser(),
  id: '1234',
});

export const MockedFirstUser: User = mockedUser();

export const MockedSecondUser: User = mockedSecoundUser();

export const mockUserMissingInfo: User = mockedUser();
