import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    cursor: 'pointer',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 18,
    '&:last-child': {
      paddingBottom: 10,
    },
  },
  title: {
    fontSize: 20,
    color: '#1C1C28',
    marginRight: 15,
    width: 270,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#515151',
  },
  listItem: {
    padding: 0,
    marginBottom: 10,
    width: '97%',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  listAddressItem: {
    paddingTop: '16px',
    borderTop: '0.5px solid #515151',
    marginBottom: 10,
    width: '97%',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  listItemIcon: {
    minWidth: 35,
  },
  listItemText: {
    fontSize: '14px',
    color: '#515151',
    wordBreak: 'break-all',
  },
});
