import type { SchemaType } from 'shared/models';

export interface FormValues {
  email: string;
  password: string;
}

export const defaultValues: FormValues = {
  email: '',
  password: '',
};

export const schema: SchemaType = {
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
