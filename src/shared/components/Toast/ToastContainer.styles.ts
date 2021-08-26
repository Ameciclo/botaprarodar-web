import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 400,
    '& svg': {
      fontSize: 20,
      marginRight: 20,
    },
  },
}));
