import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  wrapperIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    marginLeft: theme.spacing(2),
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
  },
}));
