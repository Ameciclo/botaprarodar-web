import { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input, Select } from 'shared/components';
import useStyles from './MotivationForm.styles';

export type MotivationField = 'Yes' | 'No';

export interface Props {
  control: any;
  onChange: any;
  values: any;
}

const MotivationForm: FC<Props> = ({ control, onChange, values }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.titleStyle}>
          Motivação
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Select
              dataTestId="used-bycicle-test"
              id="motivation-select"
              name="motivation"
              label="Já utilizava bicicleta antes do Bota pra Rodar?"
              value={values.motivation}
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
              defaultValue=""
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
