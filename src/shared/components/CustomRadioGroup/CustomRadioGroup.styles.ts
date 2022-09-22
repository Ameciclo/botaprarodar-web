import { makeStyles } from '@material-ui/core';

export default makeStyles({
  radioButtonTitle: {
    fontWeight: 400,
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'flex',
    margin: '1rem 0 0.5rem 0',
  },
  radioButton: {
    padding: '0.1rem',
  },
  radioButtonColor: {
    color: '#018786',
    '&.Mui-checked': {
      color: '#018786',
    },
  },
});
