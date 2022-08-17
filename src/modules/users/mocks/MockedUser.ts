import { GenderEnum } from 'modules/users/models/types/GenderTypes';
import { IncomeEnum } from 'modules/users/models/types/IncomeTypes';
import { GenderTypes } from '../models/types/GenderTypes';
import { IncomeTypes } from '../models/types/IncomeTypes';
import { RacialTypes } from '../models/types/RacialTypes';
import { SchoolingStatusTypes } from '../models/types/SchoolingStatusTypes';
import { SchoolingTypes } from '../models/types/SchoolingTypes';
import User from '../models/User';

export const mockedUser = (): User => ({
  name: 'Antoni',
  createDate: '29-03-2011',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  age: '5',
  income: IncomeEnum.above2000,
  telephone: '+55 51 3626-2001',
  gender: GenderEnum.female,
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
    motivationOpenQuestion: 'trabalho',
    alreadyAccidentVictim: true,
    problemsOnWayOpenQuestion: 'Não',
    timeOnWayOpenQuestion: '50min',
  },
});

export const MockedFirstUser: User = mockedUser();

export const MockedSecondUser: User = mockedUser();

export const mockUserMissingInfo: User = mockedUser();
