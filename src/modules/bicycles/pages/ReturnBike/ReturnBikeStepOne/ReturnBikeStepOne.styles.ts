import { makeStyles } from '@material-ui/core';

export default makeStyles({
  cardsColumnsStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '1.5rem',
  },
  icon: {
    display: 'flex',
    alignSelf: 'center',
    paddingLeft: 6,
  },
  questions: {
    margin: '1rem 0 0.5rem 0',
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
    justifyContent: 'flex-end',
  },
});
