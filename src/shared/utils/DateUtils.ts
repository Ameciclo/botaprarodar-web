const DateUtils = {
  minDateString: '01/01/1900',
  errorMessage: 'Data Inválida',
  validateDate(date: string) {
    const minDate = new Date(this.minDateString);
    const maxDate = new Date();
    const dateString = date.split('/');

    if (dateString.length === 3) {
      const dateObj = new Date(
        `${dateString[1]}/${dateString[0]}/${dateString[2]}`,
      );

      if (
        dateObj.toLocaleDateString('pt-BR') !== date ||
        dateObj.toString() === 'Invalid Date' ||
        dateObj > maxDate ||
        dateObj < minDate
      ) {
        return this.errorMessage;
      }
      return true;
    }
    return this.errorMessage;
  },

  localeDateStringToDate(localeDate: string): any {
    if (localeDate) {
      const localeDateSplit = localeDate.split(' ');
      const date = localeDateSplit[0].replace(',', '');
      const time = localeDateSplit[1];
      const dateSplit = date.split('/');
      const day = dateSplit[0];
      const month = dateSplit[1];
      const year = dateSplit[2];
      const dateObj =
        time === undefined
          ? new Date(`${month}-${day}-${year}`)
          : new Date(`${month}-${day}-${year} ${time}`);
      if (
        dateObj.toLocaleDateString('pt-BR') !== date ||
        dateObj.toString() === 'Invalid Date'
      ) {
        return this.errorMessage;
      }
      return dateObj;
    }
    return this.errorMessage;
  },

  maxDate(dates: number[]) {
    return new Date(Math.max.apply(null, dates));
  },

  calculateAge(date: string) {
    const dateObj = this.localeDateStringToDate(date);
    const ageDifMs = Date.now() - dateObj.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
};

export default DateUtils;
