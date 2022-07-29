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
              <MenuItem value="white">Branca</MenuItem>
              <MenuItem value="black">Preto</MenuItem>
              <MenuItem value="asian">Amarela</MenuItem>
              <MenuItem value="brown">Parda</MenuItem>
              <MenuItem value="not informed">Não informar</MenuItem>
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
              <MenuItem value="1">Ensino Fundamental</MenuItem>
              <MenuItem value="2">Ensino Médio</MenuItem>
              <MenuItem value="3">Ensino Superior</MenuItem>
              <MenuItem value="not informed">Não informar</MenuItem>
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
              <MenuItem value="1x">Até 1 salario minimo</MenuItem>
              <MenuItem value="3x">Até 3 salario minimos</MenuItem>
              <MenuItem value="5x">Até 5 salario minimos</MenuItem>
              <MenuItem value="+5x">Mais que 5 salarios minimos</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialInfoForm;
