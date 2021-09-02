import { makeStyles } from '@material-ui/core';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    '& button': {
      height: 20,
      '&:hover': {
        background: '#fff',
      },
    },
    '& span': {
      width: 0,
    },
  },
  menu: {
    '& svg': {
      width: 20,
      marginRight: 20,
    },
  },
});
