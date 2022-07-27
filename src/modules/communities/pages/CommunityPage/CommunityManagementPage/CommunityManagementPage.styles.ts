import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  pageTitle: {
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontFamily: 'roboto',
    width: '236px',
    textTransform: 'uppercase',
    weight: '700',
    height: '129px',
    marginTop: '50px',
    padding: '16px, 13px, 16px, 13px',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  communityManagementIcons: {
    width: '50px',
    height: '33.33px',
    paddingTop: '10px',
  },

  border: {
    border: '1px solid black',
  },
}));
