import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    height: '129px',
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  communityManagementIcons: {
    marginLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: '100%',
    height: '52px',
  },

  upperCardText: {
    marginLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    width: '100px',
    fontSize: '15px',
    fontWeight: 700,
    color: theme.palette.grey[500],
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
