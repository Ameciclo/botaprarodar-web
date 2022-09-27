import DateUtils from './DateUtils';

describe('Util: DateUtils', () => {
  describe('validateDate', () => {
    describe('should return true', () => {
      const someDate = '10/10/2010';
      const dateBeforeMaxDate = new Date();
      dateBeforeMaxDate.setDate(dateBeforeMaxDate.getDate() - 1);
      const dateAfterMinDate = new Date(DateUtils.minDateString);
      dateAfterMinDate.setDate(dateAfterMinDate.getDate() + 1);
      it.each`
        testTitle               | testedDate
        ${'has a valid format'} | ${someDate}
        ${'is before max date'} | ${dateBeforeMaxDate.toLocaleDateString('pt-BR')}
        ${'equals max date'}    | ${new Date().toLocaleDateString('pt-BR')}
        ${'is after min date'}  | ${dateAfterMinDate.toLocaleDateString('pt-BR')}
        ${'equals min date'}    | ${new Date(DateUtils.minDateString).toLocaleDateString('pt-BR')}
      `('when date $testTitle', async ({ testedDate }) => {
        expect(DateUtils.validateDate(testedDate)).toEqual(true);
      });
    });

    describe('should return error message', () => {
      const invalidDate = '10/';
      const invalidMonth = '10/15/2022';
      const invalidDay = '32/01/2022';
      const invalidDayMonth = '30/02/2022';
      const dateAfterMaxDate = new Date();
      dateAfterMaxDate.setDate(dateAfterMaxDate.getDate() + 1);
      const dateBeforeMinDate = new Date(DateUtils.minDateString);
      dateBeforeMinDate.setDate(dateBeforeMinDate.getDate() - 1);
      it.each`
        testTitle                                            | testedDate
        ${'has an invalid format'}                           | ${invalidDate}
        ${'has an invalid month value'}                      | ${invalidMonth}
        ${'has an invalid day value'}                        | ${invalidDay}
        ${'has an invalid day value according to the month'} | ${invalidDayMonth}
        ${'is after max date'}                               | ${dateAfterMaxDate.toLocaleDateString('pt-BR')}
        ${'is before min date'}                              | ${dateBeforeMinDate.toLocaleDateString('pt-BR')}
      `('when date $testTitle', async ({ testedDate }) => {
        expect(DateUtils.validateDate(testedDate)).toEqual(
          DateUtils.errorMessage,
        );
      });
    });
  });

  describe('localeDateStringToDate', () => {
    describe('should return a valid date', () => {
      const currentDate = new Date().toLocaleString('pt-BR');
      it.each`
        testTitle                  | testedDate
        ${'has an invalid format'} | ${currentDate}
      `('when date $testTitle', async ({ testedDate }) => {
        expect(
          DateUtils.localeDateStringToDate(testedDate) instanceof Date,
        ).toEqual(true);
      });
    });

    describe('should return an error message', () => {
      const notADate = 'abc';
      const invalidDate = '20/20/2022 10:10:10';
      const dateWithoutTime = '10/10/2022';
      it.each`
        testTitle                          | testedDate
        ${'param is not a date'}           | ${notADate}
        ${'param is blank'}                | ${''}
        ${'param is null'}                 | ${null}
        ${'param has an invalid date'}     | ${invalidDate}
        ${'param has a date without time'} | ${dateWithoutTime}
      `('when $testTitle', async ({ testedDate }) => {
        expect(DateUtils.localeDateStringToDate(testedDate)).toEqual(
          DateUtils.errorMessage,
        );
      });
    });
  });

  describe('maxDate', () => {
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    it('should return the right max date', () => {
      const dates = [
        currentDate.getTime(),
        pastDate.getTime(),
        futureDate.getTime(),
      ];

      expect(DateUtils.maxDate(dates)).toEqual(futureDate);
    });
  });
});
