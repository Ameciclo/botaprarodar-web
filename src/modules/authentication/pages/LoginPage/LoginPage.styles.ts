import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    backgroundColor: '#E5E5E5',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  disabled: {
    '&.Mui-disabled': {
      backgroundColor: '#D8D8D8',
    },
  },
  logoSize: {
    height: '135px',
    width: '240px',
    alignSelf: 'center',
  },
  loginPaper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    width: '50%',
    padding: '20px',
    maxWidth: '440px',
    maxHeight: '515px',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '80%',
    },
    background: '#FFFFFF',
  },
  loginForm: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  fieldsLogin: {
    margin: '10px',
    width: '90%',
  },
  buttonStyle: {
    margin: '10px',
    background: '#018786',
    borderRadius: '4px',
    width: '90%',
    height: '100%',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '1.25px',
    '&:hover': {
      backgroundColor: '#0187867F',
    },
  },
  errorIconStyle: {
    fontSize: 14,
  },
  errorMessageFields: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    color: 'red',
    alignSelf: 'flex-start',
    paddingLeft: '40px',
  },
  errorMessageLogin: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    color: 'red',
  },
}));
