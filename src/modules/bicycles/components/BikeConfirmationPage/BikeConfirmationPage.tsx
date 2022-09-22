import { useLocation } from 'react-router-dom';
import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';

type StateParams = {
  communityId?: string;
  selectedBike?: string;
  formValues?: FormValues;
};

const BikeConfirmationPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  return <p>{state.communityId}</p>;
};

export default BikeConfirmationPage;
