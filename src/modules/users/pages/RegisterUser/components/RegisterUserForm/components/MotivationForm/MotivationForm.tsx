import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { Input } from 'shared/components';
import useStyles from './MotivationForm.styles';

interface MotivationFormPros {
  control: any;
  onChange: any;
  values: any;
}

const MotivationForm: React.FC<MotivationFormPros> = ({
  control,
  onChange,
  values,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.titleStyle}>
          Motivação
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <InputLabel id="motivation-id" data-testid="used-bycicle-test">
              Já utilizava bicicleta antes?
            </InputLabel>
            <Select
              name="motivation"
              labelId="motivation-label"
              data-testid="motivation-test"
              value={values.motivation}
              onChange={onChange}
              className={classes.selectStyle}
            >
              <MenuItem value="Yes">Sim</MenuItem>
              <MenuItem value="No">Não</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Input
              label="Por que você precisa usar esta bicicleta?"
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
