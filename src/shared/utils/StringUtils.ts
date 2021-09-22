const normalizeString = (text: string): string => {
  if (!text) return '';
  return text.trim().toLowerCase();
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
    return 'Ensino superior ðcompleto';
  }
  return 'Não determinado';
};

const StringUtils = {
  normalizeString,
  normalizeRacialInfo,
  normalizeSchoolingInfo,
};

export default StringUtils;
