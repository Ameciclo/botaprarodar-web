import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90%',
  },
  image: {
    width: 923,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
  heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    color: '#263238',
    marginBottom: 10,
  },
  subheading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#263238',
    textAlign: 'center',
  },
}));
