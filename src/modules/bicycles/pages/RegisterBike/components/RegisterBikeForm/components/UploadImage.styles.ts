import { makeStyles } from '@material-ui/core';

export default makeStyles({
  card: {
    backgroundColor: '#ebebeb',
    padding: '8px',
    borderColor: '#737373',
  },
  cardError: {
    backgroundColor: '#ebebeb',
    padding: '8px',
    borderColor: 'red',
  },
  title: {
    fontWeight: 'bold',
    marginLeft: '8px',
    color: '#5c5c5c',
  },
  input: {
    display: 'none',
  },
  value: {
    fontSize: 12,
    color: '#5c5c5c',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    color: 'red',
    marginTop: '7px',
    marginLeft: '15px',
    fontSize: 12,
    '& svg': {
      fontSize: 12,
      marginRight: 5,
      marginBottom: 2,
    },
  },
});
