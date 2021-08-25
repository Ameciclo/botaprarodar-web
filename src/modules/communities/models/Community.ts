import Bicycle from '../../bicycles/models/Bicycle';
import Withdrawal from '../../../shared/models/Withdrawal';

export default interface Community {
  id: string;
  address: string;
  created_date: Date;
  description: string;
  name: string;
  org_email: string;
  org_name: string;
  bicycles: Bicycle[];
  withdrawals: Withdrawal[];
}
