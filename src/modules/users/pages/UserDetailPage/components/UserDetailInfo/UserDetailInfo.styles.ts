import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    marginTop: 60,
    alignItems: 'flex-start',
  },
  card: {
    width: 558,
    height: 295,
    overflow: 'auto',
    '& hr': {
      marginLeft: -20,
      marginRight: -20,
      border: '1px solid #eeeeee',
    },
  },
  cardHeader: {
    '& span': {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
      color: '#515151',
    },
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#515151',
    padding: '0 16px',
    overflow: 'auto',
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
  userContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  flexRowContainer: {
    display: 'flex',
    alignItems: 'space-around',
    marginLeft: 0,
  },
  userInfoElements: {
    display: 'flex',
    alignItems: 'space-evenly',
    marginLeft: 40,
    color: '#515151',
    marginBottom: 10,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'center',
  },
  username: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 36,
    fontWeight: 300,
    color: '#000000',
    marginLeft: 40,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  avatar: {
    width: '180px',
    height: '180px',
    marginBottom: '16px',
    position: 'relative',
    border: '3px solid #fff',
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
    },
  },
  imageButton: {
    border: 0,
    '& img': {
      width: '50%',
      height: '50%',
      borderRadius: 10,
      margin: 20,
    },
  },
  blocked: {
    backgroundColor: '#E53535',
    border: '3px solid #E53535',
  },
  badge: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
  },
  icon: { marginRight: '12px' },
}));
