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

interface ProblemsFormProps {
  control: any;
}

const ProblemsForm: React.FC<ProblemsFormProps> = ({ control }) => {
  const [accident, setAccident] = React.useState('');

  const handleChangeAccident = event => {
    setAccident(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dificuldades e problemas</Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <InputLabel id="demo-simple-select-label">
              Já foi vítima de colisão ou atropelamento?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={accident}
              onChange={handleChangeAccident}
            >
              <MenuItem value="Yes">Sim</MenuItem>
              <MenuItem value="No">Não</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Input
              label="Quais problemas você observa no trajeto?"
              type="text"
              name="address"
              className="address"
              control={control}
              dataTestId="address-test"
              defaultValue=""
              rules={{ required: 'Endereço do usuário é obrigatório' }}
            />
          </Grid>
          <Grid item>
            <Input
              label="Quanto tempo você leva no seu trajeto?"
              type="text"
              name="phone"
              className="input"
              control={control}
              dataTestId="phone-test"
              defaultValue=""
              rules={{ required: 'Telefone do usuário é obrigatório' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProblemsForm;
