import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 50,
    },
  },
  avatar: {
    width: '118px',
    height: '118px',
    marginBottom: '16px',
    position: 'relative',
    top: 30,
    border: '3px solid #fff',
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
    },
  },
  username: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    color: '#263238',
    marginLeft: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  userContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  userBackground: {
    background: 'rgba(1, 135, 134, 0.5)',
    width: '100%',
    height: 150,
    position: 'absolute',
    right: 0,
    top: 55,
    zIndex: -1,
  },
}));
