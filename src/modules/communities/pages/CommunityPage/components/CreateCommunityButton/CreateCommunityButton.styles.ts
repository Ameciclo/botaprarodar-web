import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  button: {
    color: '#fff',
    width: 300,
    height: 45,
    '& svg': {
      marginRight: 10,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
      width: '100%',
    },
  },
}));
