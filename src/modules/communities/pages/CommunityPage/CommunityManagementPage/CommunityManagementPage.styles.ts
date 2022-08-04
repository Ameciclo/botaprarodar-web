import { makeStyles } from '@material-ui/core';

export default makeStyles({
  bottomCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'roboto',
    fontSize: '14px',
    textTransform: 'uppercase',
    padding: '15px',
    width: '494px',
    height: '43px',
    borderBottom: '1px solid #D8D8D8',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  bottomCardBlue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'roboto',
    fontSize: '14px',
    textTransform: 'uppercase',
    marginLeft: '33px',
    padding: '15px',
    width: '496px',
    height: '43px',
    borderBottom: '1px solid #D8D8D8',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
    backgroundColor: '#018786',
    color: '#FFFFFF',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
