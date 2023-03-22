import { makeStyles } from '@material-ui/core';

export default makeStyles({
  buttonStyle: {
    background: '#018786',
    borderRadius: '4px',
    color: '#FFFFFF',
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
  uploadImage: {
    backgroundColor: '#ebebeb',
    padding: '8px',
    borderColor: '#737373',
  },
  uploadImageTitle: {
    fontWeight: 'bold',
    marginLeft: '8px',
    color: '#5c5c5c',
  },
  uploadImageInput: {
    display: 'none',
  },
});
