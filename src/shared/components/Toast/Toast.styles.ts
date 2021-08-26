import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    width: 400,
    '&:first-child div': {
      minHeight: 0,
    },
    '& .icon': {
      fontSize: 20,
      marginRight: 20,
      marginBottom: -3,
    },
  },
}));
