import User from 'models/Users/User';

export default interface Bikes {
  id: string;
  available: boolean;
  communityId: string;
  createdDate: string;
  devolutions: {
    date: string;
    id: string;
    quiz: {
      destination: string;
      giveRide: 'Não' | 'Sim';
      problemsDuringRiding: 'Não' | 'Sim';
      reason: string;
    };
    user: User;
    withdrawId: string;
  }[];
  inUse: boolean;
  name: string;
  orderNumber: number;
  path: string;
  photoPath: string;
  photoThumbnailPath: string;
  serialNumber: string;
  withdrawToUser: string;
  withdraws: { date: string; id: string; user: User }[];
}
