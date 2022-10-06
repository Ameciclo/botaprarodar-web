import { render, screen } from '@testing-library/react';
import AmountBikes from './AmountBikes';

describe('AmountBikes', () => {
  it('should render correctly when amountBikes property has value', () => {
    const amountBikes = {
      total: 10,
      available: 6,
      borrowed: 4,
    };
    render(<AmountBikes amountBikes={amountBikes} />);

    const totalBikes = screen.getByTestId('total-bikes');
    const availableBikes = screen.getByTestId('available-bikes');
    const borrowedBikes = screen.getByTestId('borrowed-bikes');
    const dividers = screen.getAllByTestId('divider');

    expect(totalBikes).toBeInTheDocument();
    expect(totalBikes.childElementCount).toBe(2);
    expect(totalBikes).toHaveStyle('color: rgb(0, 0, 0);');

    expect(availableBikes).toBeInTheDocument();
    expect(availableBikes.childElementCount).toBe(2);
    expect(availableBikes).toHaveStyle('color: rgb(0, 0, 0);');

    expect(borrowedBikes).toBeInTheDocument();
    expect(borrowedBikes.childElementCount).toBe(2);
    expect(borrowedBikes).toHaveStyle('color: rgb(63, 81, 181);');

    expect(dividers).toHaveLength(2);
  });

  it.each`
    testDescription | amountTitle                 | amountValue
    ${'total'}      | ${'Total de bicicletas'}    | ${'10'}
    ${'available'}  | ${'Bicicletas disponíveis'} | ${'6'}
    ${'borrowed'}   | ${'Bicicletas emprestadas'} | ${'4'}
  `(
    'should render $testDescription bikes elements correctly when amountBikes property has value',
    ({ amountTitle, amountValue }) => {
      const amountBikes = {
        total: 10,
        available: 6,
        borrowed: 4,
      };
      render(<AmountBikes amountBikes={amountBikes} />);

      const amountBikeTitle = screen.getByText(amountTitle);
      const amountBikeValue = screen.getByText(amountValue);

      expect(amountBikeTitle).toBeInTheDocument();
      expect(amountBikeValue).toBeInTheDocument();
    },
  );

  it.each`
    title             | amountBikes
    ${'is undefined'} | ${undefined}
    ${'is empty'}     | ${{}}
  `(
    'should render correctly when amountBikes property $title',
    ({ amountBikes }) => {
      render(<AmountBikes amountBikes={amountBikes} />);
      const emptyValue = screen.getAllByText('0');

      expect(emptyValue).toHaveLength(3);
      expect(emptyValue[0]).toBeInTheDocument();
      expect(emptyValue[1]).toBeInTheDocument();
      expect(emptyValue[2]).toBeInTheDocument();
    },
  );
});
