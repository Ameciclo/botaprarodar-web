import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input, Select } from 'shared/components';
import { ReasonEnum } from 'modules/users/models/enums';
import { FormValues } from '../../RegisterUserForm.schema';
import useStyles from './MotivationForm.styles';

type Fields = 'alreadyUseBPR' | 'alreadyUseBPROpenQuestion' | 'reason';
type FormValue = Pick<FormValues, Fields>;

export interface Props {
  onChange: any;
  values: FormValue;
  control: any;
}

const MotivationForm: FC<Props> = ({ onChange, values, control }) => {
  const classes = useStyles();

  const hasReasonValue = values?.reason;
  const hasChoosenOther = hasReasonValue && values.reason === ReasonEnum.Other;
  const shouldShowExtraField = hasChoosenOther;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Motivação
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Select
              dataTestId="already-use-bpr-test"
              id="already-use-bpr-select"
              name="alreadyUseBPR"
              label="Já utilizava bicicleta antes do Bota pra Rodar?"
              value={values?.alreadyUseBPR || 'No'}
              onChange={onChange}
              options={[
                { value: 'Yes', text: 'Sim' },
                { value: 'No', text: 'Não' },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Select
              dataTestId="reason-test"
              id="reason"
              name="reason"
              label="Por que a usuária começou a usar a bicicleta como meio de transporte?"
              value={values?.reason || 'economy-of-money'}
              onChange={onChange}
              options={[
                {
                  value: ReasonEnum.EconomyOFMoney,
                  text: ReasonEnum.EconomyOFMoney,
                },
                {
                  value: ReasonEnum.Ecology,
                  text: ReasonEnum.Ecology,
                },
                {
                  value: ReasonEnum.EconomyOfTime,
                  text: ReasonEnum.EconomyOfTime,
                },
                {
                  value: ReasonEnum.Health,
                  text: ReasonEnum.Health,
                },
                {
                  value: ReasonEnum.Delivery,
                  text: ReasonEnum.Delivery,
                },
                { value: ReasonEnum.Other, text: ReasonEnum.Other },
              ]}
            />
          </Grid>
          {shouldShowExtraField && (
            <Grid item xs={12} sm={6} md={6}>
              <Input
                dataTestId="alreadyUseBPROpenQuestion-test"
                label="Descreva porque começou a usar a bicicleta como meio de transporte, por favor."
                type="text"
                control={control}
                name="alreadyUseBPROpenQuestion"
                className="input"
                defaultValue=""
                rules={{ required: 'Descrever a razão é obrigatório.' }}
                fullWidth
              />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MotivationForm;
