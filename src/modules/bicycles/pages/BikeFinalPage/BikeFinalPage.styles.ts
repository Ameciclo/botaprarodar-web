import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    height: '20rem',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 700,
    fontSize: 28,
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    background: '#018786',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '1.25px',
    height: 45,
    marginTop: 20,
    '&:disabled': {
      backgroundColor: '#D8D8D8',
    },
    '&:hover': {
      backgroundColor: '#019b9a',
    },
  },
});
