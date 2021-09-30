import User from 'modules/users/models/User';
import dayjs from './Dayjs';

const normalizeString = (text: string): string => {
  if (!text) return '';
  return text.trim().toLowerCase();
};

const capitalizeString = (text: string): string => {
  if (!text) return '';
  return (
    normalizeString(text).charAt(0).toUpperCase() +
    normalizeString(text).slice(1)
  );
};

const normalizeRacialInfo = (racial: string): string => {
  const racialString = normalizeString(racial);

  if (racialString === 'amarelo' || racialString === 'amarela') {
    return 'Amarela';
  }
  if (racialString === 'branco' || racialString === 'branca') {
    return 'Branca';
  }
  if (
    racialString === 'negra' ||
    racialString === 'negro' ||
    racialString === 'preta' ||
    racialString === 'preto'
  ) {
    return 'Preta';
  }
  if (racialString === 'parda' || racialString === 'pardo') {
    return 'Parda';
  }
  if (
    racialString === 'indigena' ||
    racialString === 'indigeno' ||
    racialString === 'indígena' ||
    racialString === 'indígeno'
  ) {
    return 'Indígena';
  }

  return 'Outra/Não deseja informar';
};

const normalizeSchoolingInfo = (schoolingTextInfo: string): string => {
  const schoolingText = normalizeString(schoolingTextInfo);
  if (schoolingText === 'sem instrução ou menos de 1 ano de estudo') {
    return 'Sem instrução ou menos de 1 ano de estudo';
  }

  if (
    [
      '7 série',
      '7 serie',
      '5 do fundamental',
      '1 grau incompleto',
      'primeiro grau incompleto',
      'ensino fundamental incompleto',
    ].includes(schoolingText)
  ) {
    return 'Ensino fundamental incompleto';
  }

  if (
    [
      '8 série',
      '8 serie',
      '1 grau completo',
      'fundamental',
      'ensino fundamental',
      'primeiro grau completo',
      'ensino fundamental completo',
    ].includes(schoolingText)
  ) {
    return 'Ensino fundamental completo';
  }
  if (['ensino fundamental 1 incompleto'].includes(schoolingText)) {
    return 'Ensino fundamental 1 completo';
  }
  if (['ensino fundamental 1 completo'].includes(schoolingText)) {
    return 'Ensino fundamental 1 completo';
  }
  if (['ensino fundamental 2 incompleto'].includes(schoolingText)) {
    return 'Ensino fundamental 2 completo';
  }
  if (['ensino fundamental 2 completo'].includes(schoolingText)) {
    return 'Ensino fundamental 2 completo';
  }
  if (
    [
      '2 grau incompleto',
      'cursando o segundo grau',
      'segundo grau incompeto',
      'segundo grau incompleto',
      'ensino médio incompleto',
    ].includes(schoolingText)
  ) {
    return 'Ensino médio incompleto';
  }

  if (
    [
      '2 grau completo',
      'segundo grau completo',
      'ensino médio completo',
    ].includes(schoolingText)
  ) {
    return 'Ensino médio completo';
  }

  if (schoolingText === 'ensino técnico incompleto') {
    return 'Ensino técnico incompleto';
  }

  if (schoolingText === 'ensino técnico completo') {
    return 'Ensino técnico completo';
  }

  if (
    ['superior incompleto', 'ensino superior incompleto'].includes(
      schoolingText,
    )
  ) {
    return 'Ensino superior incompleto';
  }

  if (
    [
      'superior completo',
      'ensino superior',
      'ensino superior completo',
      'curso superior completo',
    ].includes(schoolingText)
  ) {
    return 'Ensino superior completo';
  }
  return 'Não determinado';
};

const normalizeAgeInfo = (user: User): string => {
  const age = Number(user.age);

  if (age > 0 && age <= 10) return 'Entre 0 e 10 anos';
  if (age > 10 && age <= 20) return 'Entre 11 e 20 anos';
  if (age > 20 && age <= 30) return 'Entre 21 e 30 anos';
  if (age > 30 && age <= 40) return 'Entre 31 e 40 anos';
  if (age > 40 && age <= 50) return 'Entre 41 e 50 anos';
  if (age > 50 && age <= 20) return 'Entre 51 e 60 anos';
  if (age > 60 && age <= 20) return 'Entre 61 e 70 anos';
  if (age > 70 && age <= 20) return 'Entre 71 e 80 anos';
  if (age > 80 && age <= 20) return 'Entre 81 e 90 anos';
  if (age > 90) return 'Acima de 90 anos';

  return 'Não especificado';
};

const normalizeIncomeInfo = (income: string): string => {
  if (
    income.includes('Entre') ||
    income.includes('Até') ||
    income.includes('Mais de')
  )
    return income;
  const incomeNumber = Number(income);

  if (incomeNumber <= 150) return 'Até 150 reais';
  if (incomeNumber > 150 && incomeNumber <= 350) return 'Entre 150 e 350';
  if (incomeNumber > 350 && incomeNumber <= 500) return 'Entre 350 e 500';
  if (incomeNumber > 500 && incomeNumber <= 750) return 'Entre 500 e 750';
  if (incomeNumber > 750 && incomeNumber <= 1100) return 'Entre 750 e 1100';
  if (incomeNumber > 1100 && incomeNumber <= 2000) return 'Entre 1100 e 2000';
  if (incomeNumber > 2000) return 'Mais de 2000';
  return 'Desejo não informar';
};

const intervalInMinutesBetweenDates = (
  startDateString: string,
  endDateString: string,
): number => {
  if (startDateString && endDateString) {
    const startDate = dayjs(startDateString, 'DD/MM/YYYY HH:mm:ss');
    const endDate = dayjs(endDateString, 'DD/MM/YYYY HH:mm:ss');
    return Number(endDate.diff(startDate, 'minutes', true).toFixed(2));
  }
  return 0;
};

const StringUtils = {
  normalizeString,
  normalizeRacialInfo,
  normalizeSchoolingInfo,
  normalizeAgeInfo,
  normalizeIncomeInfo,
  capitalizeString,
  intervalInMinutesBetweenDates,
};

export default StringUtils;
