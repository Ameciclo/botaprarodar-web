import {
  toast as rtoast,
  ToastContainer as RToastContainer,
} from 'react-toastify';

import { CheckCircleOutline, ErrorOutline } from '@material-ui/icons';
import useStyles from './Toast.styles';

const toast = {
  success(msg: string, params?: Record<string, unknown>) {
    return rtoast.success(
      <div>
        <CheckCircleOutline className="icon" />
        {msg}
      </div>,
      { ...params },
    );
  },
  error(msg: string, params?: Record<string, unknown>) {
    return rtoast.error(
      <div>
        <ErrorOutline className="icon" />
        {msg}
      </div>,
      { ...params },
    );
  },
};

export const ToastContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <RToastContainer
      position="bottom-center"
      autoClose={1000000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className={classes.container}
    />
  );
};
export default toast;
