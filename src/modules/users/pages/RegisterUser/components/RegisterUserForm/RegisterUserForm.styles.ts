import { makeStyles } from '@material-ui/core';

export default makeStyles({
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
});
