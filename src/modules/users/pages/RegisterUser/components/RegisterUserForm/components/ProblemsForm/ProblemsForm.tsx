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
import useStyles from './ProblemsForm.styles';

interface ProblemsFormProps {
  control: any;
  onChange: any;
  values: any;
}

const ProblemsForm: React.FC<ProblemsFormProps> = ({
  control,
  onChange,
  values,
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.titleStyle}>
          Dificuldades e problemas
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <InputLabel id="collision-id" data-testid="been-collision-test">
              Já foi vítima de colisão ou atropelamento?*
            </InputLabel>
            <Select
              name="collision"
              labelId="collision-label"
              id="collision-select"
              data-testid="collision-test"
              value={values.collison}
              onChange={onChange}
              className={classes.selectStyle}
            >
              <MenuItem value="Yes">Sim</MenuItem>
              <MenuItem value="No">Não</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Input
              label="Quais os problemas que você observa durante seu trajeto?*"
              type="text"
              name="problems"
              className="problems"
              control={control}
              dataTestId="problems-test"
              defaultValue=""
              rules={{ required: 'Citar problemas é obrigatório' }}
              fullWidth
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color="textSecondary"
            >
              Ex: Falta de ciclovia
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Input
              label="Quanto tempo você leva no trajeto mais frequente/comum realizado com bicicleta?*"
              type="text"
              name="timeToArrive"
              mask="time"
              className="input"
              control={control}
              dataTestId="time-to-arrive-test"
              defaultValue=""
              rules={{ required: 'Informar o tempo é obrigatório' }}
              fullWidth
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color="textSecondary"
            >
              Preencha o intervalo de tempo no formato 00:00
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProblemsForm;
