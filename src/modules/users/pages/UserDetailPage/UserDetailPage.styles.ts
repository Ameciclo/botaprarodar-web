import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    margin: '0px 15px',
  },
  heading: {
    fontWeight: 'normal',
    fontSize: 24,
    letterSpacing: '0.18px',
    '& a': {
      color: '#515151',
      textDecoration: 'none',
      '&:hover': {
        color: '#616161',
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}));
