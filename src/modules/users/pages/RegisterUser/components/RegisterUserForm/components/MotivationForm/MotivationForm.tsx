import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input, Select } from 'shared/components';
import { FormValues, Schema } from '../../RegisterUserForm.schema';
import useStyles from './MotivationForm.styles';

export type AlreadyUseBPRField = 'Yes' | 'No';

type Fields = 'alreadyUseBPR' | 'alreadyUseBPROpenQuestion' | 'reason';
type FormValue = Pick<FormValues, Fields>;
type FormSchema = Pick<Schema, Fields>;

export interface Props {
  control: any;
  onChange: any;
  values: FormValue;
  schema: FormSchema;
}

const MotivationForm: FC<Props> = ({ control, onChange, values, schema }) => {
  const classes = useStyles();

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
            <Input
              label="Qual sua motivação para utilizar a bicicleta como meio de transporte?*"
              type="text"
              name="reason"
              className="reason"
              control={control}
              dataTestId="reason-test"
              rules={schema.reason}
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MotivationForm;
