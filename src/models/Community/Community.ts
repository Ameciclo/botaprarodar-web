import Bicycle from '../Bicycle/Bicycle';
import Withdrawal from '../Withdrawal/Withdrawal';

export default interface Community {
  id: string;
  address: string;
  createdDate: Date;
  description: string;
  name: string;
  orgEmail: string;
  orgName: string;
  bicycles: Bicycle[];
  withdrawals: Withdrawal[];
}
