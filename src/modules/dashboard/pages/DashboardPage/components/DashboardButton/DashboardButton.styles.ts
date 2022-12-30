import { makeStyles } from '@material-ui/core';

export default makeStyles({
  button: {
    backgroundColor: '#F2F2F2',
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontWeight: 500,
    fontSize: 32,
    lineHeight: '48px',
    letterSpacing: '0.0025em',
    borderRadius: 8,
  },
  selected: {
    border: '2px solid teal',
  },
});
