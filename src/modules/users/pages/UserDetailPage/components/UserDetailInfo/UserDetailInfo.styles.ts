import { Badge, makeStyles, withStyles } from '@material-ui/core';

export const StyledBadgeUserDetail = withStyles(() => ({
  badge: {
    right: '50%',
    top: '90%',
    color: '#FFFFFF',
  },
}))(Badge);
export default makeStyles(theme => ({
  root: {
    marginTop: 60,
    alignItems: 'flex-start',
  },
  card: {
    width: '100%',
    '& hr': {
      marginLeft: -20,
      marginRight: -20,
      border: '1px solid #eeeeee',
    },
  },
  cardHeader: {
    '& span': {
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
    width: '100%',
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
    justifyContent: 'center',
    width: '100%',
  },
  username: {
    fontSize: 36,
    fontWeight: 300,
    color: '#000000',
    marginLeft: 40,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  avatar: {
    width: '150px',
    height: '150px',
    marginBottom: '16px',
    position: 'relative',
    border: '3px solid #fff',
    [theme.breakpoints.down('sm')]: {
      width: 100,
      height: 100,
    },
  },
  imageButton: {
    cursor: 'pointer',
    border: 0,
    backgroundColor: '#fff',
    '& img': {
      width: '47%',
      borderRadius: 10,
      margin: 10,
    },
    [theme.breakpoints.down('sm')]: {
      '& img': {
        width: '40%',
      },
    },
  },
  blocked: {
    backgroundColor: '#E53535',
    border: '3px solid #E53535',
  },
  badge: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
  icon: { marginRight: '12px' },
}));
