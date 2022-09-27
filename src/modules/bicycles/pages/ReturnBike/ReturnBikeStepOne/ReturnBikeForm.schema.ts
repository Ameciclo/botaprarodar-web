import type * as TYPE from 'modules/bicycles/models/types';

type YesNo = 'Sim' | 'Não';

export type FormValues = {
  bikeUse: TYPE.BikeUse;
  neighborhood: string;
  accidents: YesNo;
  rideShare: YesNo;
};

export const defaultFormValues: FormValues = {
  bikeUse: 'Para realizar entregas de aplicativos.',
  neighborhood: '',
  accidents: 'Não',
  rideShare: 'Não',
};
