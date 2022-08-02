import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    width: '236px',
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
    width: '55px',
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

  bottomCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'roboto',
    fontSize: '14px',
    textTransform: 'uppercase',
    padding: '15px',
    width: '494px',
    height: '43px',
    borderBottom: '1px solid #D8D8D8',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  bottomCardBlue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'roboto',
    fontSize: '14px',
    textTransform: 'uppercase',
    marginLeft: '33px',
    padding: '15px',
    width: '496px',
    height: '43px',
    borderBottom: '1px solid #D8D8D8',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
    backgroundColor: '#018786',
    color: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
