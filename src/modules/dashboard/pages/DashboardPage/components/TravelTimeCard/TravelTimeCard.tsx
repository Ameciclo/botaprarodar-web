import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CustomCard from '../../../../../../shared/components/CustomCard/CustomCard';

interface TravelTimeCardProps {
  travelTime: number[];
}

const TravelTimeCard: React.FC<TravelTimeCardProps> = ({ travelTime }) => {
  const accumulatedTime = travelTime.reduce((acc, current) => {
    return acc + current;
  });
  console.log(accumulatedTime);
  return (
    <CustomCard
      content={
        <div>
          <AccessTimeIcon />
        </div>
      }
    />
  );
};

export default TravelTimeCard;
