import { Typography } from '@material-ui/core';
import { AccessTime, DirectionsBike } from '@material-ui/icons';
import CustomCard from '../../../../../../shared/components/CustomCard/CustomCard';
import TravelTimeCardStyles from './TravelTimeCard.styles';

interface TravelTimeCardProps {
  travelTime: number[];
}

const TravelTimeCard: React.FC<TravelTimeCardProps> = ({ travelTime }) => {
  const classes = TravelTimeCardStyles();
  const accumulatedTime = travelTime.reduce((acc, current) => {
    return Number((acc + current).toFixed(2));
  }, 0);
  const totalTravels = travelTime.length;
  const averageTime = Number((accumulatedTime / travelTime.length).toFixed(0));

  const totalTimeDisplay = accumulatedTime / Number(60);
  const averageTimeDisplay = averageTime / Number(60);

  const infoContainer = (
    numberToDisplay: number,
    labelToDisplay: string,
    icon: any,
  ) => {
    return (
      <div className={classes.infoContainer}>
        {icon}
        <div className={classes.numberAndLabelContainer}>
          <span className={classes.number}> {numberToDisplay} </span>
          <Typography className={classes.label}> {labelToDisplay} </Typography>
        </div>
      </div>
    );
  };

  return (
    <CustomCard
      content={
        <div className={classes.root}>
          {infoContainer(
            Number(totalTimeDisplay.toFixed(2)),
            'Horas',
            <AccessTime fontSize="large" />,
          )}
          {infoContainer(
            totalTravels,
            'Viagens',
            <DirectionsBike fontSize="large" />,
          )}
          <CustomCard
            withoutPaddingBottom
            content={
              <span className={classes.averageTimeLabel}>
                Em média, são {averageTimeDisplay.toFixed(2)} horas por viagem
              </span>
            }
          />
        </div>
      }
      customStyle={{
        backgroundColor: '#018786',
      }}
    />
  );
};

export default TravelTimeCard;
