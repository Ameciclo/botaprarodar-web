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
};

export default DateUtils;
