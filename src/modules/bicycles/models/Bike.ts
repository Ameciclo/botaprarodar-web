import Devolution from './Devolution';
import BikeWithdraw from './BikeWithdraw';

export default interface Bike {
  id: string;
  available: boolean;
  communityId: string;
  createdDate: string;
  withdraws: BikeWithdraw[];
  devolutions: Devolution[];
  inUse: boolean;
  name: string;
  orderNumber: number;
  path: string;
  photoPath: string;
  photoThumbnailPath: string;
  serialNumber: string;
  withdrawToUser: string;
}
