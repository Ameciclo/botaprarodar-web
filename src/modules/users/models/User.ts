import { GenderTypes } from './types/GenderTypes';
import { IncomeTypes } from './types/IncomeTypes';
import { RacialTypes } from './types/RacialTypes';
import { SchoolingStatusTypes } from './types/SchoolingStatusTypes';
import { SchoolingTypes } from './types/SchoolingTypes';

export default interface User {
  name: string;
  createDate: string;
  address: string;
  gender: GenderTypes;
  profilePicture: string;
  age: string;
  racial: RacialTypes;
  schooling: SchoolingTypes;
  schoolingStatus: SchoolingStatusTypes;
  income: IncomeTypes;
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
