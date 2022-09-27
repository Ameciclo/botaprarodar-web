import { Button } from '@material-ui/core';
import Bike from 'modules/bicycles/models/Bike';
import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';
import BikeService from 'modules/bicycles/services/BikeService';
import { User } from 'modules/users/models';
import BikeCard from '../BikeCard/BikeCard';
import BikeUserCard from '../BikeUserCard/BikeUserCard';
import useStyles from './BikeConfirmationCards.styles';

interface BikeConfirmationCardsParams {
  subtitle?: string;
  selectedBike?: Bike;
  selectedUser?: User;
  buttonText?: string;
  formValues?: FormValues;
  type?: 'withdraw' | 'devolution' | undefined;
}

const BikeConfirmationCards: React.FC<BikeConfirmationCardsParams> = ({
  subtitle,
  selectedBike,
  selectedUser,
  buttonText,
  formValues,
  type,
}) => {
  const classes = useStyles();
  const confirm = () => {
    if (type === 'withdraw') {
      BikeService.lendBike(selectedUser, selectedBike);
    }

    if (type === 'devolution' && formValues) {
      BikeService.returnBike(selectedUser, selectedBike, {
        destination: formValues?.neighborhood,
        giveRide: formValues?.rideShare,
        reason: formValues?.bikeUse,
        problemsDuringRide: formValues?.accidents,
      });
    }
  };

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
            type="button"
            className={classes.buttonStyle}
            disabled={false}
            onClick={() => confirm()}
          >
            {buttonText}
          </Button>
        </span>
      </form>
    </>
  );
};

export default BikeConfirmationCards;
