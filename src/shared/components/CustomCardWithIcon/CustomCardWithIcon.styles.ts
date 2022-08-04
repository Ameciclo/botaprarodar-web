import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    width: '100%',
    weight: '700',
    height: '129px',
    marginTop: '30px',
    marginBottom: '20px',
    backgroundColor: theme.palette.common.white,
    textTransform: 'uppercase',
    borderRadius: '4px',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  communityManagementIcons: {
    marginLeft: '10px',
    width: '100%',
    height: '52px',
    paddingTop: '10px',
  },

  upperCardText: {
    marginLeft: '10px',
    width: '100px',
    color: '#828282',
    paddingTop: '20px',
    fontSize: '15px',
    fontWeight: 700,
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
