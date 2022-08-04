import {
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { GenderTypes } from 'modules/users/models/types/GenderTypes';
import { IncomeTypes } from 'modules/users/models/types/IncomeTypes';
import { RacialTypes } from 'modules/users/models/types/RacialTypes';
import { SchoolingStatusTypes } from 'modules/users/models/types/SchoolingStatusTypes';
import { SchoolingTypes } from 'modules/users/models/types/SchoolingTypes';
import User from 'modules/users/models/User';
import React from 'react';

interface SocialInfoFormProps {
  control: any;
  user?: User;
  onChange: any;
}

const SocialInfoForm: React.FC<SocialInfoFormProps> = ({
  control,
  user,
  onChange,
}) => {
  SocialInfoForm.defaultProps = {
    user: {
      name: '',
      createDate: '',
      communityId: '',
      telephone: '',
      gender: GenderTypes['Não declarado'],
      age: '',
      income: IncomeTypes['not informed'],
      status: true,
      id: '',
      profilePicture: '',
      address: '',
      isBlocked: false,
      racial: RacialTypes['not informed'],
      schooling: SchoolingTypes['Não informado'],
      schoolingStatus: SchoolingStatusTypes.No,
      userQuiz: {
        alreadyUseBPR: false,
        alreadyUseBPROpenQuestion: '',
        motivationOpenQuestion: '',
        alreadyAccidentVictim: false,
        problemsOnWayOpenQuestion: '',
        timeOnWayOpenQuestion: '',
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dados sociais</Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <InputLabel id="gender-id">Gênero</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={user?.gender}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={GenderTypes.Masculino}>Masculino</MenuItem>
              <MenuItem value={GenderTypes.Feminino}>Feminino</MenuItem>
              <MenuItem value={GenderTypes.Outro}>Outro</MenuItem>
              <MenuItem value={GenderTypes['Não declarado']}>
                Prefiro não informar
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="race-id">Raça</InputLabel>
            <Select
              labelId="race-label"
              id="race-select"
              value={user?.racial}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={RacialTypes.asian}>Amarela</MenuItem>
              <MenuItem value={RacialTypes.white}>Branca</MenuItem>
              <MenuItem value={RacialTypes.indigenous}>Indígena</MenuItem>
              <MenuItem value={RacialTypes.brown}>Parda</MenuItem>
              <MenuItem value={RacialTypes.black}>Preta</MenuItem>
              <MenuItem value={RacialTypes['not informed']}>
                Prefiro não informar
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="schooling-id">Grau de instrução</InputLabel>
            <Select
              labelId="schooling-label"
              id="schooling-select"
              value={user?.schooling}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value="1">
                Sem instrução ou menos de um ano de estudo
              </MenuItem>
              <MenuItem value={SchoolingTypes['Ensino Fundamental 1']}>
                Ensino Fundamental 1
              </MenuItem>
              <MenuItem value={SchoolingTypes['Ensino Fundamental 2']}>
                Ensino Fundamental 2
              </MenuItem>
              <MenuItem value={SchoolingTypes['Ensino Médio']}>
                Ensino Médio
              </MenuItem>
              <MenuItem value={SchoolingTypes['Ensino Técnico']}>
                Ensino Técnico
              </MenuItem>
              <MenuItem value={SchoolingTypes['Ensino Superior']}>
                Ensino Superior
              </MenuItem>
              <MenuItem value={SchoolingTypes['Não informado']}>
                Não determinado
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="income-id">Qual sua renda?</InputLabel>
            <Select
              labelId="income-label"
              id="income-select"
              value={user?.income}
              onChange={onChange}
              defaultValue=""
            >
              <MenuItem value={IncomeTypes['>150']}>Até 150 reais</MenuItem>
              <MenuItem value={IncomeTypes['150-300']}>
                Entre 150 e 300 reais
              </MenuItem>
              <MenuItem value={IncomeTypes['500-700']}>
                Entre 500 e 700 reais
              </MenuItem>
              <MenuItem value={IncomeTypes['750-1100']}>
                Entre 750 e 1100 reais
              </MenuItem>
              <MenuItem value={IncomeTypes['1100-2000']}>
                Entre 1100 e 2000 reais
              </MenuItem>
              <MenuItem value={IncomeTypes['+2000']}>
                Mais de 2000 reais
              </MenuItem>
              <MenuItem value={IncomeTypes['not informed']}>
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
