import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
    },
  },

  userBackground: {
    background: 'rgba(1, 135, 134, 0.5)',
    width: '100%',
    height: 80,
    position: 'absolute',
    right: 0,
    top: 55,
    zIndex: -1,
  },
}));
