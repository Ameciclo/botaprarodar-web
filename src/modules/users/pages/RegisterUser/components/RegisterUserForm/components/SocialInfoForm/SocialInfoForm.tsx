import {
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { GenderEnum } from 'modules/users/models/types/GenderTypes';
import { IncomeEnum } from 'modules/users/models/types/IncomeTypes';
import { RacialEnum } from 'modules/users/models/types/RacialTypes';
import {
  SchoolingEnum,
  SchoolingTypes,
} from 'modules/users/models/types/SchoolingTypes';
import React from 'react';

interface SocialInfoFormProps {
  control: any;
  values: any;
  onChange: any;
}

const SocialInfoForm: React.FC<SocialInfoFormProps> = ({
  control,
  values,
  onChange,
}) => {
  console.log({ values });
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dados sociais</Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <InputLabel id="gender-id">Gênero</InputLabel>
            <Select
              labelId="gender-label"
              name="gender"
              id="gender-select"
              value={values.gender}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={GenderEnum.male}>Masculino</MenuItem>
              <MenuItem value={GenderEnum.female}>Feminino</MenuItem>
              <MenuItem value={GenderEnum.other}>Outro</MenuItem>
              <MenuItem value={GenderEnum.notDeclared}>
                Prefiro não informar
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="race-id">Raça</InputLabel>
            <Select
              labelId="race-label"
              name="race"
              id="race-select"
              value={values.race}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={RacialEnum.asian}>Amarela</MenuItem>
              <MenuItem value={RacialEnum.white}>Branca</MenuItem>
              <MenuItem value={RacialEnum.indigenous}>Indígena</MenuItem>
              <MenuItem value={RacialEnum.brown}>Parda</MenuItem>
              <MenuItem value={RacialEnum.black}>Preta</MenuItem>
              <MenuItem value={RacialEnum.notInformed}>
                Prefiro não informar
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="schooling-id">Grau de instrução</InputLabel>
            <Select
              labelId="schooling-label"
              name="schooling"
              id="schooling-select"
              value={values.schooling}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={SchoolingEnum.SemOuMenosDeUmAno}>
                Sem instrução ou menos de um ano de estudo
              </MenuItem>
              <MenuItem value={SchoolingEnum.EnsinoFundamental1}>
                Ensino Fundamental 1
              </MenuItem>
              <MenuItem value={SchoolingEnum.EnsinoFundamental2}>
                Ensino Fundamental 2
              </MenuItem>
              <MenuItem value={SchoolingEnum.EnsinoMedio}>
                Ensino Médio
              </MenuItem>
              <MenuItem value={SchoolingEnum.EnsinoTecnico}>
                Ensino Técnico
              </MenuItem>
              <MenuItem value={SchoolingEnum.EnsinoSuperior}>
                Ensino Superior
              </MenuItem>
              <MenuItem value={SchoolingEnum.NotInformed}>
                Não determinado
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="income-id">Qual sua renda?</InputLabel>
            <Select
              labelId="income-label"
              name="income"
              id="income-select"
              value={values.income}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={IncomeEnum.until150}>Até 150 reais</MenuItem>
              <MenuItem value={IncomeEnum.from150To300}>
                Entre 150 e 300 reais
              </MenuItem>
              <MenuItem value={IncomeEnum.from500To700}>
                Entre 500 e 700 reais
              </MenuItem>
              <MenuItem value={IncomeEnum.from750To1100}>
                Entre 750 e 1100 reais
              </MenuItem>
              <MenuItem value={IncomeEnum.from1100To2000}>
                Entre 1100 e 2000 reais
              </MenuItem>
              <MenuItem value={IncomeEnum.above2000}>
                Mais de 2000 reais
              </MenuItem>
              <MenuItem value={IncomeEnum.notInformed}>
                Não desejo informar
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialInfoForm;
