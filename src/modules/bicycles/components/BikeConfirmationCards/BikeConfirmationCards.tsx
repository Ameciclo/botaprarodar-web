import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Bike from 'modules/bicycles/models/Bike';
import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';
import BikeService from 'modules/bicycles/services/BikeService';
import { User } from 'modules/users/models';
import { toast } from 'shared/components';
import BikeCard from '../BikeCard/BikeCard';
import BikeUserCard from '../BikeUserCard/BikeUserCard';
import useStyles from './BikeConfirmationCards.styles';

interface BikeConfirmationCardsParams {
  subtitle?: string;
  selectedBike?: Bike;
  selectedUser?: User;
  buttonText?: string;
  formValues?: FormValues;
  type?: 'withdraw' | 'devolution';
  communityId?: string;
}

const BikeConfirmationCards: React.FC<BikeConfirmationCardsParams> = ({
  subtitle,
  selectedBike,
  selectedUser,
  buttonText,
  formValues,
  type,
  communityId,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const goToFinalPage = () => {
    const params = { type, communityId };
    history.push('/comunidades/bicicleta/final', params);
  };

  const confirm = async () => {
    let bikeUpdated;
    try {
      if (type === 'withdraw') {
        bikeUpdated = await BikeService.lendBike(selectedUser, selectedBike);
      }

      if (type === 'devolution' && formValues) {
        bikeUpdated = await BikeService.returnBike(selectedUser, selectedBike, {
          destination: formValues?.neighborhood,
          giveRide: formValues?.rideShare,
          reason: formValues?.bikeUse,
          problemsDuringRide: formValues?.accidents,
        });
      }

      if (bikeUpdated) {
        goToFinalPage();
      } else {
        toast.error('Ocorreu algum erro. Por favor, tente novamente');
      }
    } catch (error) {
      toast.error('Ocorreu algum erro. por favor, tente novamente');
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
