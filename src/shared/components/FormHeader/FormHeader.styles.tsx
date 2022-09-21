import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    height: 65,
  },
  formHeaderBackground: {
    background: 'rgba(1, 135, 134, 0.5)',
    width: '100%',
    height: 100,
    position: 'absolute',
    right: 0,
    top: 55,
    zIndex: -1,
  },
  heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    letterSpacing: '0.18px',
    marginTop: 10,
    '& a': {
      color: '#1C1C28;',
      textDecoration: 'none',
      '&:hover': {
        color: '#616161',
      },
    },
  },
}));
