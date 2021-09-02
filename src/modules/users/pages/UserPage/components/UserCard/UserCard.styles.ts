import { Badge, makeStyles, withStyles } from '@material-ui/core';

export const StyledBadge = withStyles(() => ({
  badge: {
    right: '50%',
    top: '100%',
    color: '#FFFFFF',
  },
}))(Badge);

export default makeStyles({
  card: {
    width: '100%',
    background: '#ffffff',
    boxShadow:
      '0px 0px 0px rgb(63 63 68 / 5%), 0px 1px 2px rgb(63 63 68 / 15%)',
    borderRadius: '4px',
    '& a': {
      textDecoration: 'none',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: '73.82px !important',
    height: '73.82px !important',
    display: 'block',
    margin: 'auto',
  },
  name: {
    color: '#515151',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '10px',
    textAlign: 'left',
    margin: '10px 0 16px 0',
  },
  description: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '10px 0',
  },
  icon: { marginRight: '12px', color: '#515151' },
  text: {
    color: '#515151',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
  },
  blocked: {
    backgroundColor: '#E53535',
    border: '3px solid #E53535',
  },
  badge: {
    '& svg': {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
    },
  },
});
