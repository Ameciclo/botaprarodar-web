import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';
import { FormHeader } from 'shared/components';
import Bike from 'modules/bicycles/models/Bike';
import { User } from 'modules/users/models';
import { UserService } from 'modules/users/services';
import TitleBikePage from '../../components/TitleBikePage/TitleBikePage';
import BikeConfirmationCards from '../../components/BikeConfirmationCards/BikeConfirmationCards';

type StateParams = {
  communityId?: string;
  selectedBike?: Bike;
  selectedUser?: User;
  formValues?: FormValues;
};

const BikeConfirmationPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  const lendBike = state.selectedUser;
  const returnBike = state.formValues;
  const [user, setUser] = useState<User>();
  const [bike, setBike] = useState<Bike>();
  const cardProps = (lendBike && {
    returnButtonLink: '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
    title: 'Emprestar bicicleta',
    subtitle: 'Confirme o empréstimo',
    buttonText: 'Confirmar empréstimo',
  }) ||
    (returnBike && {
      returnButtonLink: '/comunidades/devolver-bicicleta/questionario',
      title: 'Devolver bicicleta',
      subtitle: 'Confirme a devolução',
      buttonText: 'Confirmar devolução',
    }) || { returnButtonLink: '', title: '', subtitle: '', buttonText: '' };

  useEffect(() => {
    setUser(state.selectedUser);
  }, [state.selectedUser]);

  useEffect(() => {
    setBike(state.selectedBike);
  }, [state.selectedBike]);

  useEffect(() => {
    async function getUserFromBike() {
      if (returnBike) {
        setUser(await UserService.getUserById(bike?.withdrawToUser));
      }
    }
    getUserFromBike();
  }, [bike, returnBike]);

  return (
    <>
      <FormHeader
        link={cardProps.returnButtonLink}
        title="Voltar"
        state={{
          communityId: state.communityId,
          selectedBike: state.selectedBike,
          formValues: returnBike && state.formValues,
          selectedUser: lendBike && state.selectedUser,
        }}
      />
      <TitleBikePage title={cardProps.title} />
      <BikeConfirmationCards
        selectedUser={user}
        selectedBike={bike}
        formValues={state.formValues}
        communityId={state.communityId}
        type={
          (returnBike && 'devolution') ||
          (lendBike && 'withdraw') ||
          (undefined && '')
        }
        {...cardProps}
      />
    </>
  );
};

export default BikeConfirmationPage;
