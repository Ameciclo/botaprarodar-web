import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    marginTop: 25,
  },
  card: {
    '& hr': {
      marginLeft: -20,
      marginRight: -20,
      border: '1px solid #eeeeee',
    },
  },
  cardHeader: {
    '& span': {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 16,
      color: '#263238',
    },
  },
  cardContent: {
    display: 'flex',
    color: '#515151',
    '&:last-child': {
      paddingBottom: 16,
    },
    '& svg': {
      marginRight: 10,
    },
  },
});
