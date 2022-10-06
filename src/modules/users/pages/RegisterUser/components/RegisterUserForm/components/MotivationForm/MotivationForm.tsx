import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input, Select } from 'shared/components';
import { ReasonEnum } from 'modules/users/models/enums';
import { ReasonTexts } from 'modules/users/models/enums/Reason.enum';
import { FormValues } from '../../RegisterUserForm.schema';
import useStyles from './MotivationForm.styles';

type Fields = 'alreadyUseBPR' | 'motivationOpenQuestion' | 'motivation';
type FormValue = Pick<FormValues, Fields>;

export interface Props {
  onChange: any;
  values: FormValue;
  control: any;
}

const MotivationForm: FC<Props> = ({ onChange, values, control }) => {
  const classes = useStyles();

  const hasReasonValue = values?.motivation;
  const hasChoosenOther =
    hasReasonValue && values.motivation === ReasonEnum.Other;
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
              dataTestId="motivation-test"
              id="motivation"
              name="motivation"
              label="Por que a usuária começou a usar a bicicleta como meio de transporte?"
              value={values?.motivation || ReasonEnum.EconomyOFMoney}
              onChange={onChange}
              options={[
                {
                  value: ReasonEnum.EconomyOFMoney,
                  text: ReasonTexts.EconomyOFMoney,
                },
                {
                  value: ReasonEnum.Ecology,
                  text: ReasonTexts.Ecology,
                },
                {
                  value: ReasonEnum.EconomyOfTime,
                  text: ReasonTexts.EconomyOfTime,
                },
                {
                  value: ReasonEnum.Health,
                  text: ReasonTexts.Health,
                },
                {
                  value: ReasonEnum.Delivery,
                  text: ReasonTexts.Delivery,
                },
                { value: ReasonEnum.Other, text: ReasonTexts.Other },
              ]}
            />
          </Grid>
          {shouldShowExtraField && (
            <Grid item xs={12} sm={6} md={6}>
              <Input
                dataTestId="motivation-open-question-test"
                label="Descreva porque começou a usar a bicicleta como meio de transporte, por favor."
                type="text"
                control={control}
                name="motivationOpenQuestion"
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
