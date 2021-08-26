import { toast as rtoast } from 'react-toastify';
import { CheckCircleOutline } from '@material-ui/icons';

const toast = {
  success(msg: string) {
    return rtoast.success(
      <div>
        <CheckCircleOutline />
        {msg}
      </div>,
    );
  },
};
export default toast;
