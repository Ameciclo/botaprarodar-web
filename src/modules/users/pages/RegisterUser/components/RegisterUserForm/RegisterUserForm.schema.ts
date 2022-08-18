import type { SchemaType as Rules } from 'shared/models';
import type {
  SchoolingType,
  GenderType,
  RacialType,
  IncomeType,
} from 'modules/users/models/types';

export type AlreadyUseBPRField = 'Yes' | 'No';

export type FormValues = {
  reason?: string;
  alreadyUseBPR?: AlreadyUseBPRField;
  alreadyUseBPROpenQuestion?: string;
  schooling?: SchoolingType;
  gender?: GenderType;
  race?: RacialType;
  income?: IncomeType;
  schoolingStatus?: string;
};

export const defaultFormValues: FormValues = {
  reason: '',
  alreadyUseBPR: 'No',
  alreadyUseBPROpenQuestion: '',
  schooling: 'Not Informed',
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
  alreadyUseBPROpenQuestion: {},
  schooling: {},
  gender: {},
  race: {},
  income: {},
  schoolingStatus: {},
};
