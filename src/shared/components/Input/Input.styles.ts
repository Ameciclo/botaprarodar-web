import { makeStyles } from '@material-ui/core';

export default makeStyles({
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    '& svg': {
      fontSize: 12,
      marginRight: 5,
      marginBottom: 2,
    },
  },
});
