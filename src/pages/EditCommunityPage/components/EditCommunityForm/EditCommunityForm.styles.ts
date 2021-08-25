import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    margin: '20px 0',
    '& hr': {
      border: '1px solid #CCC',
    },
    '& button': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
  header: {
    '& span': {
      fontSize: 18,
      fontWeight: 500,
    },
  },
  input: {
    width: '100%',
  },
  buttonStyle: {
    background: '#018786',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '1.25px',
    width: 200,
    height: 45,
    marginTop: 20,
    '&:disabled': {
      backgroundColor: '#D8D8D8',
    },
    '&:hover': {
      backgroundColor: '#019b9a',
    },
  },
  buttonCancel: {
    width: 200,
    height: 45,
    margin: '20px 20px 0 0',
    backgroundColor: '#FFF',
    border: '1px solid #EEEEEE',
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
  buttonSeparator: {
    margin: '20px -20px 0 -20px',
  },
}));
