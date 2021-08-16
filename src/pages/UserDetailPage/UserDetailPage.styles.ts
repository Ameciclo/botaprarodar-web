import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    margin: '0px 15px',
    height: '88vh',
  },
  heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    color: '#515151',
    letterSpacing: '0.18px',
    '& a': {
      color: '#515151',
      textDecoration: 'none',
    },
  },
  avatar: {
    width: '118px !important',
    height: '118px !important',
    display: 'block',
    margin: 'auto',
    marginBottom: '16px',
  },
  username: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: '0.15px',
    color: '#263238',
  },
  userContainer: {},
}));
