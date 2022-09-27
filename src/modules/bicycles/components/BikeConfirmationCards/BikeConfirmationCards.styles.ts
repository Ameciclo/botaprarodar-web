import { makeStyles } from '@material-ui/core';

export default makeStyles({
  p: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontSize: 18,
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    background: '#018786',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '1.25px',
    width: 260,
    height: 45,
    marginTop: 20,
    '&:disabled': {
      backgroundColor: '#D8D8D8',
    },
    '&:hover': {
      backgroundColor: '#019b9a',
    },
  },
  buttonAlign: {
    display: 'flex',
    marginTop: 13,
    alignItems: 'center',
    flexDirection: 'column',
  },
});
