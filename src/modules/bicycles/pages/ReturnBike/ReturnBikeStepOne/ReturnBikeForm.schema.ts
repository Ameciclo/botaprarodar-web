import type * as TYPE from 'modules/bicycles/models/types';

type YesNo = 'Sim' | 'Não';

export type FormValues = {
  bikeUse: TYPE.BikeUse;
  neighborhood: string;
  customNeighborhood: string;
  accidents: YesNo;
  rideShare: YesNo;
};

export const defaultFormValues: FormValues = {
  bikeUse: 'Para realizar entregas de aplicativos.',
  neighborhood: '',
  customNeighborhood: '',
  accidents: 'Não',
  rideShare: 'Não',
};
