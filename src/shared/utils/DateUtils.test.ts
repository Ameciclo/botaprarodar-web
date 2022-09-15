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
});
