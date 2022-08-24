import type { SchemaType as Rules } from 'shared/models';

export interface FormValues {
  email: string;
  password: string;
}

export const defaultValues: FormValues = {
  email: '',
  password: '',
};

type Keys = keyof typeof defaultValues;

export type Schema = Record<Keys, Rules>;

export const schema: Schema = {
  email: {
    required: 'Digite seu e-mail',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'E-mail inválido',
    },
  },
  password: {
    required: 'Digite sua senha',
  },
};
