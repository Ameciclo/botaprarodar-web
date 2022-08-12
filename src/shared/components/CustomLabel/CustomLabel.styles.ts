import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  content: {
    width: '100%',
    height: '43px',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    flexDirection: 'row',
    textTransform: 'uppercase',
    justifyContent: 'space-between',
  },
  default: {
    background: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
