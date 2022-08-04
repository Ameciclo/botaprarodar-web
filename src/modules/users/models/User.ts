import { GenderTypes } from './types/GenderTypes';
import { IncomeTypes } from './types/IncomeTypes';
import { RacialTypes } from './types/RacialTypes';
import { SchoolingStatusTypes } from './types/SchoolingStatusTypes';
import { SchoolingTypes } from './types/SchoolingTypes';

export default interface User {
  name: string;
  createDate: string;
  address: string;
  gender: string;
  profilePicture: string;
  age: string;
  racial: string;
  schooling: string;
  schoolingStatus: string;
  income: string;
  communityId: string;
  telephone: string;
  status: boolean;
  id: string;
  isBlocked: boolean;
  userQuiz: {
    alreadyUseBPR: boolean;
    alreadyUseBPROpenQuestion: string;
    motivationOpenQuestion: string;
    alreadyAccidentVictim: boolean;
    problemsOnWayOpenQuestion: string;
    timeOnWayOpenQuestion: string;
  };
}
