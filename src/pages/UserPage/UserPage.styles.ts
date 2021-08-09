import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    margin: '30px 40px',
  },
  heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    color: '#515151',
    letterSpacing: '0.18px',
  },
  userList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
  },
});
