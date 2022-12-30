import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    margin: '0px 15px',
    height: '88vh',
  },
  heading: {
    fontWeight: 'normal',
    fontSize: 24,
    color: '#1C1C28',
    letterSpacing: '0.18px',
    marginBottom: 20,
  },
  userList: {
    minHeight: 400,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
