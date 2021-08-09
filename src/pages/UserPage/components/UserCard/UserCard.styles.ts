import { makeStyles } from '@material-ui/core';

export default makeStyles({
  card: {
    height: '237px',
    width: '366px',
    background: '#ffffff',
    boxShadow:
      '0px 0px 0px rgb(63 63 68 / 5%), 0px 1px 2px rgb(63 63 68 / 15%)',
    borderRadius: '4px',
    margin: '24px',
  },
  avatar: {
    width: '64px !important',
    height: '64px !important',
    display: 'block',
    margin: 'auto',
    marginBottom: '16px',
  },
  name: {
    color: '#515151',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    marginBottom: '16px !important',
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  icon: { marginRight: '12px' },
  text: {
    color: '#828282',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
  },
});
