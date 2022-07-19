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
  subtitle: {
    fontSize: '16px',
    fontWeight: 'lighter',
  },
  filterCommunity: {
    width: '780px',
    height: '48px',
    background: '#F0F0F0',
    marginTop: '20px',
    marginBottom: '30px',
  },
}));
