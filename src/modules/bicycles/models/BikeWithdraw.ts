import User from '../../users/models/User';

export default interface BikeWithdraw {
  date: string;
  id: string;
  user: User;
}
