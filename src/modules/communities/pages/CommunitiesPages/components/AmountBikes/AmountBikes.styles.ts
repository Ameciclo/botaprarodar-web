import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  content: {
    width: '100%',
    height: '43px',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    flexDirection: 'row',
    textTransform: 'uppercase',
    justifyContent: 'space-between',
    background: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  contentEmphasis: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  info: {
    margin: '12px 0',
    padding: theme.spacing(2),
    borderRadius: '5px',
    width: '75%',
  },
}));
