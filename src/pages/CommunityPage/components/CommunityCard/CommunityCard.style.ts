import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    width: '100%',
    display: 'inline-block',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    cursor: 'pointer',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 24,
  },
  title: {
    fontSize: 20,
    color: '#515151',
    marginRight: 15,
  },
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#515151',
  },
  list: {
    marginTop: 18,
  },
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    minWidth: 35,
  },
  listItemText: {
    fontSize: '14px',
    color: '#828282',
  },
});
