import { makeStyles } from '@material-ui/core';

export default makeStyles({
  cardHeader: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',

    letterSpacing: '-0.05px',

    color: '#263238',
  },
  cardContent: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '16px',
    /* identical to box height, or 114% */

    textAlign: 'center',
    letterSpacing: '1.25px',
    textTransform: 'uppercase',
    color: '#515151',
  },
});
