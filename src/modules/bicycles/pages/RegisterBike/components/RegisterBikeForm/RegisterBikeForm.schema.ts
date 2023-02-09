import * as yup from 'yup';

export interface RegisterBikeFormData {
  name: string;
  serialNumber: string;
  orderNumber: number;
  photoThumbnailPath: File | null;
}

export const defaultFormValues: RegisterBikeFormData = {
  name: '',
  serialNumber: '',
  orderNumber: 0,
  photoThumbnailPath: null,
};

export const registerBikeSchema = yup
  .object({
    name: yup
      .string()
      .required('Nome da bicicleta é obrigatório')
      .typeError('Nome da bicicleta deve ser um texto')
      .matches(/^[a-zA-Z0-9 ]*$/, {
        message: 'Nome da bicicleta não pode conter caracteres especiais',
      })
      .matches(/[^0-9]/, {
        message: 'Nome da bicicleta não pode conter somente números',
      }),
    serialNumber: yup
      .string()
      .required('Número de série é obrigatório')
      .typeError('Número de série deve ser um texto')
      .matches(/^[a-zA-Z0-9]*$/, {
        message:
          'Número de série não pode conter caracteres especiais ou espaços em branco',
      }),
    orderNumber: yup
      .number()
      .typeError('Número da ordem deve conter apenas números')
      .positive('Número da ordem deve ser maior que 0')
      .integer('Número da ordem deve ser um número inteiro')
      .required('Número da ordem é obrigatório'),
    photoThumbnailPath: yup
      .mixed()
      .required('Imagem da bicicleta é obrigatória'),
  })
  .required();
