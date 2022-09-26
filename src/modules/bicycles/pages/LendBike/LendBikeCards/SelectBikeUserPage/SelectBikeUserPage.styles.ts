import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    marginBottom: '20px',
    width: 600,
    height: 100,
    marginTop: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: '#018786',
  },
  positionStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  textFieldStyle: {
    background: '#F0F0F0',
  },
});
