import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  wrapper: {
    width: '100%',
  },
  label: {
    backgroundColor: theme.palette.common.white,
    padding: `0 ${theme.spacing(1)}`,
  },
}));
