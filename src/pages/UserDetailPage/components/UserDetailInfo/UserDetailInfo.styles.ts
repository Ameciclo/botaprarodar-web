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
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#515151',
    padding: '0 16px',
    height: 76,
    '&:last-child': {
      paddingBottom: 0,
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginRight: 10,
      },
    },
  },
  imageButton: {
    width: 90,
    height: 60,
    border: 0,
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
  },
});
