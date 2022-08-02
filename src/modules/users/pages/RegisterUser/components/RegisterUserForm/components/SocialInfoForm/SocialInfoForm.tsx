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

interface SocialInfoFormProps {
  control: any;
}

const SocialInfoForm: React.FC<SocialInfoFormProps> = ({ control }) => {
  const [gender, setGender] = React.useState('');
  const [race, setRace] = React.useState('');
  const [instruction, setInstruction] = React.useState('');
  const [instructionConclusion, setInstructionConclusion] = React.useState('');
  const [income, setIncome] = React.useState('');

  const handleChangeGender = event => {
    setGender(event.target.value);
  };

  const handleChangeRace = event => {
    setRace(event.target.value);
  };

  const handleChangeInstruction = event => {
    setInstruction(event.target.value);
  };

  const handleChangeInstructionConclusion = event => {
    setInstructionConclusion(event.target.value);
  };

  const handleChangeIncome = event => {
    setIncome(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dados sociais</Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={handleChangeGender}
            >
              <MenuItem value="male">Masculino</MenuItem>
              <MenuItem value="female">Feminino</MenuItem>
              <MenuItem value="other">Outro</MenuItem>
              <MenuItem value="not informed">Prefiro não informar</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">Raça</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={race}
              onChange={handleChangeRace}
            >
              <MenuItem value="asian">Amarela</MenuItem>
              <MenuItem value="white">Branca</MenuItem>
              <MenuItem value="indigenous">Indígena</MenuItem>
              <MenuItem value="brown">Parda</MenuItem>
              <MenuItem value="black">Preta</MenuItem>
              <MenuItem value="not informed">Prefiro não informar</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">
              Grau de instrução
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={instruction}
              onChange={handleChangeInstruction}
            >
              <MenuItem value="1">
                Sem instrução ou menos de um ano de estudo
              </MenuItem>
              <MenuItem value="2">Ensino Fundamental 1</MenuItem>
              <MenuItem value="3">Ensino Fundamental 2</MenuItem>
              <MenuItem value="4">Ensino Médio</MenuItem>
              <MenuItem value="5">Ensino Técnico</MenuItem>
              <MenuItem value="6">Ensino Superior</MenuItem>
              <MenuItem value="not informed">Não determinado</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">
              Você concluiu o grau acima?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={instructionConclusion}
              onChange={handleChangeInstructionConclusion}
            >
              <MenuItem value="Yes">Sim</MenuItem>
              <MenuItem value="No">Não</MenuItem>
              <MenuItem value="in progress">Cursando</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">
              Qual sua renda?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={income}
              onChange={handleChangeIncome}
            >
              <MenuItem value="150">Até 150 reais</MenuItem>
              <MenuItem value="150-300">Entre 150 e 300 reais</MenuItem>
              <MenuItem value="500-700">Entre 500 e 700 reais</MenuItem>
              <MenuItem value="750-1100">Entre 750 e 1100 reais</MenuItem>
              <MenuItem value="1100-2000">Entre 1100 e 2000 reais</MenuItem>
              <MenuItem value="+2000">Mais de 2000 reais</MenuItem>
              <MenuItem value="not informed">Não desejo informar</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialInfoForm;
