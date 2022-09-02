import type * as TYPE from 'modules/users/models/types';
import type { SchemaType as Rules } from 'shared/models';

type AlreadyUseBPRField = 'Yes' | 'No';

export type FormValues = {
  reason: TYPE.ReasonType;
  alreadyUseBPR: AlreadyUseBPRField;
  alreadyUseBPROpenQuestion: string;
  schooling: TYPE.SchoolingType;
  gender: TYPE.GenderType;
  race: TYPE.RacialType;
  income: TYPE.IncomeType;
  schoolingStatus: string;
};

export const defaultFormValues: FormValues = {
  reason: 'Porque começou a trabalhar com entregas.',
  alreadyUseBPR: 'No',
  alreadyUseBPROpenQuestion: '',
  schooling: 'Não informado',
  gender: 'Não declarado',
  race: 'Não Informado',
  income: 'Não informado',
  schoolingStatus: '',
};

type Keys = keyof typeof defaultFormValues;

export type Schema = Record<Keys, Rules>;

export const schema: Schema = {
  reason: { required: 'A motivação do uso é obrigatória' },
  alreadyUseBPR: {},
  alreadyUseBPROpenQuestion: { required: 'Campo obrigatório' },
  schooling: {},
  gender: {},
  race: {},
  income: {},
  schoolingStatus: {},
};
