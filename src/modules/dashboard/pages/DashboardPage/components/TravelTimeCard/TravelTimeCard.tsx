import { Typography } from '@material-ui/core';
import { AccessTime, FlightTakeoff } from '@material-ui/icons';
import CustomCard from '../../../../../../shared/components/CustomCard/CustomCard';
import TravelTimeCardStyles from './TravelTimeCard.styles';

interface TravelTimeCardProps {
  travelTime: number[];
}

const TravelTimeCard: React.FC<TravelTimeCardProps> = ({ travelTime }) => {
  const classes = TravelTimeCardStyles();
  const accumulatedTime = travelTime.reduce((acc, current) => {
    return acc + current;
  }, 0);
  const totalTravels = travelTime.length;
  const averageTime = Number((accumulatedTime / travelTime.length).toFixed(0));

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
            accumulatedTime,
            'Minutos',
            <AccessTime fontSize="large" />,
          )}
          {infoContainer(
            totalTravels,
            'Viagens',
            <FlightTakeoff fontSize="large" />,
          )}
          <CustomCard
            content={
              <span className={classes.averageTimeLabel}>
                Em média, são {averageTime} minutos por viagem
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
