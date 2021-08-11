import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 250,
  },
  activeItem: {
    background: 'rgba(1, 135, 134, 0.3)',
    borderRadius: 4,
    margin: '0 18px',
    '& svg': {
      color: '#018786',
    },
    '& a': {
      color: '#018786',
      textDecoration: 'none',
    },
    '& span': {
      fontWeight: 500,
    },
  },
  item: {
    margin: '0 18px',
    '& a': {
      color: '#000',
      textDecoration: 'none',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
