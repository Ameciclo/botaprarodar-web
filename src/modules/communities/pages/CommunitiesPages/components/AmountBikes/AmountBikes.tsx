import { FC } from 'react';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AmountBikesPerCommunity from 'modules/bicycles/utils/AmountBikesPerCommunity';
import useStyles from './AmountBikes.styles';

interface Props {
  amountBikes: AmountBikesPerCommunity | undefined;
}

const AmountBikes: FC<Props> = ({ amountBikes }) => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.info}>
      <Typography
        component="p"
        className={classes.content}
        data-testid="total-bikes"
      >
        <span>Total de bicicletas</span>
        <span>{amountBikes?.total || 0}</span>
      </Typography>
      <Divider />
      <Typography
        component="p"
        className={classes.content}
        data-testid="available-bikes"
      >
        <span>Bicicletas disponíveis</span>
        <span>{amountBikes?.available || 0}</span>
      </Typography>
      <Divider />
      <Typography
        component="p"
        className={`${classes.content} ${classes.contentEmphasis}`}
        data-testid="borrowed-bikes"
      >
        <span>Bicicletas emprestadas</span>
        <span>{amountBikes?.borrowed || 0}</span>
      </Typography>
    </Paper>
  );
};

export default AmountBikes;
