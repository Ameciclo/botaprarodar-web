import DateUtils from './DateUtils';

describe('Util: DateUtils', () => {
  describe('validateDate', () => {
    describe('should return true', () => {
      it('when date has a valid format', () => {
        const response = DateUtils.validateDate('10/10/2010');
        expect(response).toEqual(true);
      });

      it('when date is before maxDate', () => {
        const dateBeforeMaxDate = new Date();
        dateBeforeMaxDate.setDate(dateBeforeMaxDate.getDate() - 1);
        const response = DateUtils.validateDate(
          dateBeforeMaxDate.toLocaleDateString('pt-BR'),
        );
        expect(response).toEqual(true);
      });

      it('when date equals maxDate', () => {
        const currentDate = new Date().toLocaleDateString('pt-BR');
        const response = DateUtils.validateDate(currentDate);
        expect(response).toEqual(true);
      });

      it('when date is after minDate', () => {
        const dateAfterMinDate = new Date(DateUtils.minDateString);
        dateAfterMinDate.setDate(dateAfterMinDate.getDate() + 1);
        const response = DateUtils.validateDate(
          dateAfterMinDate.toLocaleDateString('pt-BR'),
        );
        expect(response).toEqual(true);
      });

      it('when date equals minDate', () => {
        const minDate = new Date(DateUtils.minDateString);
        const response = DateUtils.validateDate(
          minDate.toLocaleDateString('pt-BR'),
        );
        expect(response).toEqual(true);
      });
    });

    describe('should return error message', () => {
      it('when date has an invalid format', () => {
        const response = DateUtils.validateDate('10/');
        expect(response).toEqual(DateUtils.errorMessage);
      });

      it('when date has an invalid month value', () => {
        const response = DateUtils.validateDate('10/15/2022');
        expect(response).toEqual(DateUtils.errorMessage);
      });

      it('when date has an invalid day value', () => {
        const response = DateUtils.validateDate('32/01/2022');
        expect(response).toEqual(DateUtils.errorMessage);
      });

      it('when date has an invalid day value according to the month', () => {
        const response = DateUtils.validateDate('30/02/2022');
        expect(response).toEqual(DateUtils.errorMessage);
      });

      it('when date is after maxDate', () => {
        const dateAfterMaxDate = new Date();
        dateAfterMaxDate.setDate(dateAfterMaxDate.getDate() + 1);
        const response = DateUtils.validateDate(
          dateAfterMaxDate.toLocaleDateString('pt-BR'),
        );
        expect(response).toEqual(DateUtils.errorMessage);
      });

      it('when date is before minDate', () => {
        const dateBeforeMinDate = new Date(DateUtils.minDateString);
        dateBeforeMinDate.setDate(dateBeforeMinDate.getDate() - 1);
        const response = DateUtils.validateDate(
          dateBeforeMinDate.toLocaleDateString('pt-BR'),
        );
        expect(response).toEqual(DateUtils.errorMessage);
      });
    });
  });
});
