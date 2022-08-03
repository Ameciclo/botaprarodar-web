const ColorsUtils = {
  getPastelColor(opacity = 1) {
    const hue = Math.floor(Math.random() * 12) * 30;
    const randomColor = `hsla(${hue}, 70%, 80%, ${opacity})`;

    return randomColor;
  },
  getColorArrays(length: number) {
    const array1: string[] = [];
    const array2: string[] = [];

    for (let i = 0; i < length; i += 1) {
      const newColor = this.getPastelColor(0.3);
      console.log(newColor);
      if (array1.includes(newColor)) {
        i -= 1;
      } else {
        array1.push(newColor);
        array2.push(newColor.replace('0.3', '1'));
      }
    }
    return [array1, array2];
  },
};

export default ColorsUtils;
