import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    top: 10,
    '& button': {
      height: 20,
      '&:hover': {
        background: '#fff',
      },
    },
  },
  menu: {
    '& svg': {
      width: 20,
      marginRight: 20,
    },
  },
});
