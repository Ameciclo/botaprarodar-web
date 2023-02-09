/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, CircularProgress, Grid } from '@material-ui/core';
import { Input } from 'shared/components';
import UploadImage from './components/UploadImage';
import useRegisterBikeFormController from './RegisterBikeForm.controller';
import useStyles from './RegisterBikeForm.styles';

interface Props {
  communityId: string;
}

const RegisterBikeForm = ({ communityId }: Props) => {
  const classes = useStyles();
  const {
    control,
    loading,
    onSubmit,
    onCancel,
    validateInputEmpty,
    validateFileInputEmpty,
    validateInputNumberEmpty,
  } = useRegisterBikeFormController(communityId);

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Input
            label="Nome da Bicicleta"
            type="text"
            name="name"
            className="bikeName"
            control={control}
            dataTestId="name-test"
            rules={{
              required: 'Nome da bicicleta é obrigatório',
              validate: validateInputEmpty,
            }}
            fullWidth
          />
        </Grid>
        <Grid container item direction="row" spacing={3}>
          <Grid item xs={6}>
            <Input
              label="Número da Ordem"
              type="number"
              name="orderNumber"
              className="bikeOrderNumber"
              control={control}
              dataTestId="order-number-test"
              rules={{
                required: 'Número da ordem é obrigatório',
                validate: validateInputNumberEmpty,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Número de Série"
              type="text"
              name="serialNumber"
              className="bikeSerialNumber"
              control={control}
              dataTestId="serial-number-test"
              rules={{
                required: 'Número de série é obrigatório',
                validate: validateInputEmpty,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <UploadImage
            id="photoThumbnailPath"
            name="photoThumbnailPath"
            title="Adicione uma foto da Bicicleta"
            dataTestId="photo-thumbnail-path-test"
            control={control}
            rules={{
              required: 'Imagem da bicicleta é obrigatória',
              validate: validateFileInputEmpty,
            }}
          />
        </Grid>
      </Grid>
      <Button
        data-testid="cancel-button"
        type="button"
        className={classes.buttonCancel}
        onClick={onCancel}
      >
        CANCELAR
      </Button>
      <Button
        data-testid="submit-button"
        type="submit"
        className={classes.buttonStyle}
        disabled={loading}
        startIcon={
          loading ? <CircularProgress style={{ width: 23, height: 23 }} /> : ''
        }
      >
        {loading ? 'CARREGANDO' : 'CONCLUIR CADASTRO'}
      </Button>
    </form>
  );
};

export default RegisterBikeForm;
