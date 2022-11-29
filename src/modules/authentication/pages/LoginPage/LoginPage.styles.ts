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
  imageEdit: {
    height: '135px',
    width: '240px',
    alignSelf: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '80%',
    },
  },
  loginPaper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    width: '50%',
    padding: '30px',
    maxWidth: '440px',
    maxHeight: '515px',
    background: '#FFFFFF',
  },
  loginForm: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  fieldsLogin: {
    margin: '10px 0',
    width: '100%',
  },
  buttonStyle: {
    margin: '10px 0',
    background: '#018786',
    borderRadius: '4px',
    width: '100%',
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
  errorMessageFields: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    fontSize: 14,
    fontStyle: 'normal',
    color: 'red',
    alignSelf: 'flex-start',
  },
  errorMessageLogin: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    color: 'red',
  },
  passwordResetLink: {
    display: 'flex',
    textDecoration: 'none',
    fontSize: 16,
    color: '#018786',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
