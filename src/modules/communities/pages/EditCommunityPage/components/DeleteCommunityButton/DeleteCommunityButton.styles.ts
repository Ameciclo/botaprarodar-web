import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  button: {
    backgroundColor: '#e61919',
    color: '#fff',
    width: 250,
    height: 45,
    marginTop: 20,
    '& svg': {
      marginRight: 10,
    },
    '&:hover': {
      backgroundColor: '#eb6060',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
