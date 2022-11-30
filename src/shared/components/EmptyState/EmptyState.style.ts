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
    width: 654,
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  heading: {
    fontWeight: 300,
    fontSize: 38,
    [theme.breakpoints.down('sm')]: {
      fontSize: 23,
    },
    color: '#263238',
    marginBottom: 10,
  },
  subheading: {
    fontWeight: 700,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
    color: '#263238',
    textAlign: 'center',
  },
}));
