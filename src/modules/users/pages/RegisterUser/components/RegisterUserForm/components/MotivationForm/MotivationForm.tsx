import {
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Input } from 'shared/components';

interface MotivationFormPros {
  control: any;
}

const MotivationForm: React.FC<MotivationFormPros> = ({ control }) => {
  const [useBycicle, setUseBycicle] = React.useState('');

  const handleChangeUseBycicle = event => {
    setUseBycicle(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Motivação</Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <InputLabel id="demo-simple-select-label">
              Já utilizava bicicleta antes?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={useBycicle}
              onChange={handleChangeUseBycicle}
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
