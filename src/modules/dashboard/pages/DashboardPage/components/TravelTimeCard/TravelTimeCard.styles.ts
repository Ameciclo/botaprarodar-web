import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  infoContainer: {
    display: 'flex',
    color: 'white',
  },
  numberAndLabelContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '10px',
  },
  label: {
    fontSize: '12px',
  },
  number: {
    fontWeight: 900,
    fontSize: '26px',
    marginBottom: '5px',
  },
  icon: {
    alignSelf: 'center',
  },
  averageTimeLabel: {
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textTransform: 'none',
    color: '#018786',
  },
});
