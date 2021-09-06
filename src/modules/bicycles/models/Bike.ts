import User from 'modules/users/models/User';
import Devolution from './Devolution';

export default interface Bike {
  id: string;
  available: boolean;
  communityId: string;
  createdDate: string;
  devolutions: Devolution[];
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
