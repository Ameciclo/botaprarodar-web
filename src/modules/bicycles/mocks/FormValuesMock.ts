import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';

export const mockedFormValues = (): FormValues => {
  return {
    bikeUse: 'Para realizar entregas de aplicativos.',
    neighborhood: 'teste',
    accidents: 'Não',
    rideShare: 'Não',
  };
};
