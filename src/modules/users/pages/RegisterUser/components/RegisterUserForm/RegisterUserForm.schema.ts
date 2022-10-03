import { ReasonEnum } from 'modules/users/models/enums';
import type * as TYPE from 'modules/users/models/types';
import type { SchemaType as Rules } from 'shared/models';

type AlreadyUseBPRField = 'Yes' | 'No';

export type FormValues = {
  motivation: ReasonEnum;
  alreadyUseBPR: AlreadyUseBPRField;
  motivationOpenQuestion: string;
  schooling: TYPE.SchoolingType;
  gender: TYPE.GenderType;
  race: TYPE.RacialType;
  income: TYPE.IncomeType;
  schoolingStatus: string;
};

export const defaultFormValues: FormValues = {
  motivation: ReasonEnum.Delivery,
  alreadyUseBPR: 'No',
  motivationOpenQuestion: '',
  schooling: 'Não informado',
  gender: 'Não declarado',
  race: 'Não Informado',
  income: 'Não informado',
  schoolingStatus: '',
};

type Keys = keyof typeof defaultFormValues;

export type Schema = Record<Keys, Rules>;

export const schema: Schema = {
  motivation: { required: 'A motivação do uso é obrigatória' },
  alreadyUseBPR: {},
  motivationOpenQuestion: { required: 'Campo obrigatório' },
  schooling: {},
  gender: {},
  race: {},
  income: {},
  schoolingStatus: {},
};
