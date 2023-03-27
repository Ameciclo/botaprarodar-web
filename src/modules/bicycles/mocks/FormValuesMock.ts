import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';

export const mockedFormValues = (): FormValues => {
  return {
    bikeUse: 'Para realizar entregas de aplicativos.',
    neighborhood: 'Outros Bairros',
    customNeighborhood: '',
    accidents: 'Não',
    rideShare: 'Não',
  };
};
