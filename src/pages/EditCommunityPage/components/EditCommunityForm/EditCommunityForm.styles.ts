import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    margin: '20px 0',
    '& hr': {
      border: '1px solid #EEEEEE',
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
    marginTop: 20,
    '&:disabled': {
      backgroundColor: '#D8D8D8',
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
  buttonSeparator: {
    margin: '20px -20px 0 -20px',
  },
}));
