import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import TitleBikePage from 'modules/bicycles/components/TitleBikePage/TitleBikePage';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader, Select, Input } from 'shared/components';
import { BikeUseEnum } from 'modules/bicycles/models/enum';
import CustomRadioGroup from 'shared/components/CustomRadioGroup/CustomRadioGroup';
import Bike from 'modules/users/models/Bike';
import Neighborhoods from 'modules/bicycles/models/Neighborhoods';
import ReturnBikeService from 'modules/bicycles/services/ReturnBikeService';
import SelectOptionsLabel from 'shared/models/SelectOptionsLabel';
import useStyles from './ReturnBikeStepOne.styles';
import { defaultFormValues, FormValues } from './ReturnBikeForm.schema';

type StateParams = {
  communityId?: string;
  selectedBike?: Bike;
  formValues?: FormValues;
};

const ReturnBikeStepOne: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  const [neighborhoodsState, setNeighborhoodsState] = useState<Neighborhoods[]>(
    [],
  );
  const { control, setValue, watch, handleSubmit } = useForm<FormValues>(
    !state || !state.formValues
      ? {
          defaultValues: defaultFormValues,
        }
      : {
          defaultValues: {
            bikeUse: state.formValues.bikeUse,
            neighborhood: state.formValues.neighborhood,
            accidents: state.formValues.accidents,
            rideShare: state.formValues.rideShare,
          },
        },
  );
  const values = watch();
  const classes = useStyles();
  const hasParams = !!state?.communityId && !!state?.selectedBike;
  const yes = { label: 'Sim', value: 'Sim' };
  const no = { label: 'Não', value: 'Não' };
  const history = useHistory();

  const onSubmit = async (formValues: any) => {
    const params = {
      communityId: state.communityId,
      selectedBike: state.selectedBike,
      formValues: { ...formValues },
    };
    history.push('/comunidades/devolver-bicicleta/confirmacao', params);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  useEffect(() => {
    ReturnBikeService.getAllNeighborhoods()
      .then(res => {
        setNeighborhoodsState(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const neighborhoodsOptions: SelectOptionsLabel[] = neighborhoodsState.map(
    item => ({ value: item.id.toString(), text: item.name }),
  );

  neighborhoodsOptions.push({
    value: neighborhoodsState.length.toString(),
    text: 'Outros Bairros',
  } as SelectOptionsLabel);

  return (
    <>
      {!hasParams && (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Opss!"
          subheading="Página não encontrada"
        />
      )}

      {hasParams && (
        <>
          <FormHeader
            link="/comunidades/devolver-bicicleta"
            title="Voltar"
            state={{
              communityId: state.communityId,
              formValues: state.formValues,
            }}
          />
          <TitleBikePage title="Questionário" />
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.cardsColumnsStyle}
                >
                  Responda ao questionário
                  <InfoOutlined className={classes.icon} />
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="p"
                  className={classes.questions}
                >
                  A bicicleta foi usada para que?
                </Typography>
                <Select
                  id="bikeUse"
                  label=""
                  name="bikeUse"
                  dataTestId="bike-use-test"
                  value={values.bikeUse}
                  onChange={handleChange}
                  options={[
                    {
                      value: BikeUseEnum.AppDeliver,
                      text: BikeUseEnum.AppDeliver,
                    },
                    {
                      value: BikeUseEnum.GoToWork,
                      text: BikeUseEnum.GoToWork,
                    },
                    {
                      value: BikeUseEnum.GoToSchool,
                      text: BikeUseEnum.GoToSchool,
                    },
                    {
                      value: BikeUseEnum.TransportKids,
                      text: BikeUseEnum.TransportKids,
                    },
                    {
                      value: BikeUseEnum.Errands,
                      text: BikeUseEnum.Errands,
                    },
                    {
                      value: BikeUseEnum.Leisure,
                      text: BikeUseEnum.Leisure,
                    },
                  ]}
                />
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="p"
                  className={classes.questions}
                >
                  Para qual bairro você foi?
                </Typography>
                <Select
                  id="neighborhood"
                  label=""
                  name="neighborhood"
                  dataTestId="bike-neighborhood-test"
                  value={values.neighborhood}
                  onChange={handleChange}
                  options={neighborhoodsOptions}
                />
                {values.neighborhood ===
                  neighborhoodsState.length.toString() && (
                  <>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="label"
                      className={classes.questions}
                    >
                      <span>Outro bairro:</span>
                      <Input
                        label=""
                        type="text"
                        name="customNeighborhood"
                        className=""
                        control={control}
                        dataTestId="bike-customNeighborhood-test"
                        rules={{
                          required:
                            'Informação do bairro de destino é obrigatória',
                        }}
                        fullWidth
                      />
                    </Typography>
                  </>
                )}
                <CustomRadioGroup
                  value={values?.accidents}
                  onChange={handleChange}
                  direction="row"
                  title="Você sofreu alguma violência no trânsito durante o seu trajeto? (exemplo: carro passou perto e rápido demais, foi fechada numa curva, etc)?"
                  name="accidents"
                  options={[yes, no]}
                />
                <CustomRadioGroup
                  value={values?.rideShare}
                  onChange={handleChange}
                  direction="row"
                  title="Precisou levar carona?"
                  name="rideShare"
                  options={[yes, no]}
                />
                <span className={classes.buttonAlign}>
                  <Button
                    data-testid="submit-button"
                    type="submit"
                    className={classes.buttonStyle}
                    disabled={false}
                  >
                    Confirmar Devolução
                  </Button>
                </span>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
};

export default ReturnBikeStepOne;
