import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  wrapperIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
