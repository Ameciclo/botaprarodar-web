const getPastelColor = (opacity = 1) => {
  const hue = Math.floor(Math.random() * 12) * 30;
  const randomColor = `hsla(${hue}, 70%, 80%, ${opacity})`;
  return randomColor;
};

const getColorArray = (length: number) => {
  const array: string[] = [];

  for (let i = 0; i < length; i += 1) {
    const newColor = getPastelColor();
    if (array.includes(newColor)) {
      i -= 1;
    } else {
      array.push(newColor);
    }
  }
  return array;
};

/* 
  
*/

/**
 * Returns two arrays of color.
  
 * The first one with 0.3 of opacity and the second with 1 of opacity.
 
 * Both arrays are in 'hsla' color

 * @param length Length of the array
 */
const getColorArrays = (length: number) => {
  const array1: string[] = [];
  const array2: string[] = [];

  for (let i = 0; i < length; i += 1) {
    const newColor = getPastelColor(0.3);
    if (array1.includes(newColor)) {
      i -= 1;
    } else {
      array1.push(newColor);
      array2.push(newColor.replace('0.3', '1'));
    }
  }
  return [array1, array2];
};

const ColorsUtils = {
  getPastelColor,
  getColorArray,
  getColorArrays,
};

export default ColorsUtils;
