import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
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
  emailField: {
    width: '100%',
    margin: '10px 0',
  },
  buttonStyle: {
    marginTop: '10px',
    background: '#018786',
    borderRadius: '4px',
    height: '100%',
    width: '100%',
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
  errorMessageField: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    fontSize: 14,
    fontStyle: 'normal',
    color: 'red',
    alignSelf: 'flex-start',
  },
}));
