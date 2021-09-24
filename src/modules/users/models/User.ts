import { GenderTypes } from './GenderTypes';

export default interface User {
  name: string;
  age: string;
  income: string;
  communityId: string;
  telephone: string;
  status: boolean;
  gender: GenderTypes;
  profilePicture: string;
  id: string;
  address: string;
  docNumber: bigint;
  docPicture: string;
  docPictureBack: string;
  residenceProofPicture: string;
  isBlocked: boolean;
  racial: string;
  schooling: string;
  userQuiz: {
    alreadyUseBPR: boolean;
  };
}
