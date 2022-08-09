import ColorsUtils from './ColorsUtils';

describe('Util: ColorsUtils', () => {
  describe('getPastelColor', () => {
    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.46181924139267294);
    });

    afterAll(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });

    describe('shoud return correty value', () => {
      it('when has opacity', () => {
        const response = ColorsUtils.getPastelColor(0.5);

        expect(response).toEqual('hsla(150, 70%, 80%, 0.5)');
      });

      it('when has not opacity', () => {
        const response = ColorsUtils.getPastelColor();

        expect(response).toEqual('hsla(150, 70%, 80%, 1)');
      });
    });
  });

  describe('getColorArrays', () => {
    describe('should return correcty value', () => {
      let spy;

      beforeAll(() => {
        spy = jest.spyOn(ColorsUtils, 'getPastelColor');
      });

      afterAll(() => {
        jest.spyOn(ColorsUtils, 'getPastelColor').mockRestore();
      });

      it('when lenght is equal 1', () => {
        spy.mockReturnValueOnce('hsla(30, 70%, 80%, 0.3)');
        const response = ColorsUtils.getColorArrays(1);

        expect(spy).toBeCalledTimes(1);

        expect(response).toHaveLength(2);
        expect(response).toEqual([
          ['hsla(30, 70%, 80%, 0.3)'],
          ['hsla(30, 70%, 80%, 1)'],
        ]);
      });

      it('when lenght is greater than 1', () => {
        spy
          .mockReturnValueOnce('hsla(1, 70%, 80%, 0.3)')
          .mockReturnValueOnce('hsla(1, 70%, 80%, 0.3)') // Ignore this option (equal)
          .mockReturnValueOnce('hsla(2, 70%, 80%, 0.3)')
          .mockReturnValueOnce('hsla(3, 70%, 80%, 0.3)');

        const response = ColorsUtils.getColorArrays(3);

        expect(spy).toBeCalledTimes(4);

        expect(response).toHaveLength(2);
        expect(response).toEqual([
          [
            'hsla(1, 70%, 80%, 0.3)',
            'hsla(2, 70%, 80%, 0.3)',
            'hsla(3, 70%, 80%, 0.3)',
          ],
          [
            'hsla(1, 70%, 80%, 1)',
            'hsla(2, 70%, 80%, 1)',
            'hsla(3, 70%, 80%, 1)',
          ],
        ]);
      });
    });
  });
});
