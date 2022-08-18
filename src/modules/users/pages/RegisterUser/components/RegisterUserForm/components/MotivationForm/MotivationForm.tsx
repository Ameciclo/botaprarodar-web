import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input, Select } from 'shared/components';
import { FormValues } from '../../RegisterUserForm.schema';
import useStyles from './MotivationForm.styles';

export type AlreadyUseBPRField = 'Yes' | 'No';

type Value = Pick<
  FormValues,
  'alreadyUseBPR' | 'alreadyUseBPROpenQuestion' | 'reason'
>;
export interface Props {
  control: any;
  onChange: any;
  values: Value;
}

const MotivationForm: FC<Props> = ({ control, onChange, values }) => {
  const classes = useStyles();
  const hasUsedBikesInThePast = values?.alreadyUseBPR === 'Yes';

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
              value={values?.alreadyUseBPR || ''}
              onChange={onChange}
              options={[
                { value: 'Yes', text: 'Sim' },
                { value: 'No', text: 'Não' },
              ]}
            />
          </Grid>
          {hasUsedBikesInThePast && (
            <Grid item xs={12} sm={6} md={6}>
              <Input
                label="Por quanto tempo?"
                type="text"
                name="alreadyUseBPROpenQuestion"
                className=""
                control={control}
                dataTestId="already-use-bpr-open-question-test"
                rules={{ required: 'Campo obrigatório' }}
                fullWidth
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={6}>
            <Input
              label="Qual sua motivação para utilizar a bicicleta como meio de transporte?*"
              type="text"
              name="reason"
              className="reason"
              control={control}
              dataTestId="reason-test"
              rules={{ required: 'A motivação do uso é obrigatória' }}
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MotivationForm;
