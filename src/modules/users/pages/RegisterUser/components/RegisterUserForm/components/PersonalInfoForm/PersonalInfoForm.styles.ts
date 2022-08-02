import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  personalInfoTitle: {
    paddingBottom: '15px',
  },
  formatSubtitle: {
    fontSize: '12px',
    fontFamily: 'Roboto',
  },
  secondRowLayout: {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
  },
  profilePictureALign: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#018786',
    color: '#ffff',
    width: 184,
    height: 32,
    '& svg': {
      marginRight: 10,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0',
      width: '100%',
    },
  },
}));
