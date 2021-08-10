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
  },
  item: {
    margin: '0 18px',
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
  activeLink: {
    color: '#018786',
    textDecoration: 'none',
  },
}));