import { makeStyles } from '@material-ui/core';

export default makeStyles({
  label: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 26,
    letterSpacing: 0.18,
    margin: '0px 0px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  partialValueLabel: {
    fontSize: 12,
    color: '#1C1C28',
    alignSelf: 'flex-start',
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
  squareIconLabel: {
    marginLeft: '-8px',
  },
});
