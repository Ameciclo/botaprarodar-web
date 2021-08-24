import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  pageTitle: {
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
  },
  card: {
    width: '100%',
  },
  emptyStateContainer: {
    height: '80vh',
  },
}));
