import * as yup from 'yup';

export interface RegisterBikeFormData {
  name: string;
  serialNumber: string;
  orderNumber: string;
  photoThumbnailPath: File | null;
}

export const defaultFormValues: RegisterBikeFormData = {
  name: '',
  serialNumber: '',
  orderNumber: '',
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
      })
      .max(50, 'Nome da bicicleta deve ter no máximo 50 caracteres')
      .min(3, 'Nome da bicicleta deve ter no mínimo 3 caracteres'),
    serialNumber: yup
      .string()
      .required('Número de série é obrigatório')
      .typeError('Número de série deve ser um texto')
      .matches(/^[a-zA-Z0-9]*$/, {
        message:
          'Número de série não pode conter caracteres especiais ou espaços em branco',
      })
      .max(50, 'Número de série deve ter no máximo 50 caracteres')
      .min(3, 'Número de série deve ter no mínimo 3 caracteres'),
    orderNumber: yup
      .string()
      .required('Número da ordem é obrigatório')
      .matches(/^[0-9]*$/, {
        message: 'Número da ordem deve conter apenas números',
      })
      .test('positive', 'Número da ordem deve ser maior que 0', val => {
        return Number(val) > 0;
      })
      .test('integer', 'Número da ordem deve ser maior que 0', val => {
        return !val.match('.') || !val.match(',');
      })
      .test('size', 'Número da ordem deve ter no máximo 50 caracteres', val => {
        return val.toString().length <= 50;
      }),
    photoThumbnailPath: yup
      .mixed()
      .required('Imagem da bicicleta é obrigatória')
      .test(
        'size',
        'Imagem da bicicleta deve ter menos que 2mb de tamanho',
        value => {
          return (value as File).size <= 2000000;
        },
      ),
  })
  .required();
