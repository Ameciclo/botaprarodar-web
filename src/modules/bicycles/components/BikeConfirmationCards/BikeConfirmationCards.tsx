import { Button } from '@material-ui/core';
import Bike from 'modules/bicycles/models/Bike';
import { User } from 'modules/users/models';
import BikeCard from '../BikeCard/BikeCard';
import BikeUserCard from '../BikeUserCard/BikeUserCard';
import useStyles from './BikeConfirmationCards.styles';

interface BikeConfirmationCardsParams {
  subtitle?: string;
  selectedBike?: Bike;
  selectedUser?: User;
  buttonText?: string;
}

const BikeConfirmationCards: React.FC<BikeConfirmationCardsParams> = ({
  subtitle,
  selectedBike,
  selectedUser,
  buttonText,
}) => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.p}>{subtitle}</p>
      <form>
        <span className={classes.buttonAlign}>
          <BikeCard
            {...selectedBike}
            imagePath={selectedBike?.photoThumbnailPath}
          />
          <BikeUserCard {...selectedUser} />

          <Button
            data-testid="submit-button"
            type="submit"
            className={classes.buttonStyle}
            disabled={false}
          >
            {buttonText}
          </Button>
        </span>
      </form>
    </>
  );
};

export default BikeConfirmationCards;
