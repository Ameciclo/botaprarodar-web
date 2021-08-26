import { ToastContainer as RToastContainer } from 'react-toastify';
import useStyles from './ToastContainer.styles';

const ToastContainer: React.FC = () => {
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

export default ToastContainer;
