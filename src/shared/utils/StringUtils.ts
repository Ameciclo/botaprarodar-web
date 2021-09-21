const normalizeString = (text: string): string => {
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

const StringUtils = {
  normalizeString,
  normalizeRacialInfo,
};

export default StringUtils;
