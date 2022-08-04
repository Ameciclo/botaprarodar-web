import { GenderTypes } from '../models/types/GenderTypes';
import { IncomeTypes } from '../models/types/IncomeTypes';
import { RacialTypes } from '../models/types/RacialTypes';
import { SchoolingStatusTypes } from '../models/types/SchoolingStatusTypes';
import { SchoolingTypes } from '../models/types/SchoolingTypes';
import User from '../models/User';

export const MockedFirstUser: User = {
  name: 'Antoni',
  createDate: '29-03-2011',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  age: '5',
  income: IncomeTypes['150-300'],
  telephone: '+55 51 3626-2001',
  gender: GenderTypes.Masculino,
  status: true,
  id: '123',
  profilePicture: 'test',
  address: 'Test street',
  isBlocked: false,
  racial: RacialTypes.indigenous,
  schooling: SchoolingTypes['Ensino Médio'],
  schoolingStatus: SchoolingStatusTypes.No,
  userQuiz: {
    alreadyUseBPR: false,
    alreadyUseBPROpenQuestion: 'Trabalho',
    motivationOpenQuestion: 'trabalho',
    alreadyAccidentVictim: true,
    problemsOnWayOpenQuestion: 'Não',
    timeOnWayOpenQuestion: '50min',
  },
};

export const MockedSecondUser: User = {
  name: 'Antonia Maria da Silva ',
  createDate: '29-03-2011',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  telephone: '+55 51 3626-2001',
  gender: GenderTypes.Feminino,
  age: '40',
  income: IncomeTypes['750-1100'],
  status: true,
  id: '321',
  profilePicture: 'test',
  address: 'Test street',
  isBlocked: false,
  racial: RacialTypes.black,
  schooling: SchoolingTypes['Ensino Médio'],
  schoolingStatus: SchoolingStatusTypes.No,
  userQuiz: {
    alreadyUseBPR: false,
    alreadyUseBPROpenQuestion: 'Escola',
    motivationOpenQuestion: 'Escola',
    alreadyAccidentVictim: false,
    problemsOnWayOpenQuestion: 'Não',
    timeOnWayOpenQuestion: '50min',
  },
};

export const mockUserMissingInfo: User = {
  name: 'Antonia Maria da Silva ',
  createDate: '29-03-2011',
  communityId: '-MLDOXs3p35DEHg0gdUU',
  telephone: '',
  gender: GenderTypes.Feminino,
  age: '40',
  income: IncomeTypes['750-1100'],
  status: true,
  id: '321',
  profilePicture: 'test',
  address: '',
  isBlocked: false,
  racial: RacialTypes.black,
  schooling: SchoolingTypes['Ensino Médio'],
  schoolingStatus: SchoolingStatusTypes.No,
  userQuiz: {
    alreadyUseBPR: false,
    alreadyUseBPROpenQuestion: 'Escola',
    motivationOpenQuestion: 'Escola',
    alreadyAccidentVictim: false,
    problemsOnWayOpenQuestion: 'Não',
    timeOnWayOpenQuestion: '50min',
  },
};
