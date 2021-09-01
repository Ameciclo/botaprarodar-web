import { makeStyles } from '@material-ui/core';

export default makeStyles({
  labels: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: '24px',
    letterSpacing: 0.18,
    margin: '0px 10px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  partialValueLabel: {
    fontSize: 12,
    color: '#1C1C28',
  },
  partialValue: {
    fontSize: 26,
    color: '#1C1C28',
    display: 'flex',
    alignItems: 'center',
  },
  totalValue: {
    fontSize: 26,
    color: '#828282',
    display: 'flex',
    alignItems: 'center',
  },
  totalValueLabel: {
    fontSize: 12,
    color: '#1C1C28',
  },
});
