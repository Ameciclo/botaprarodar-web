import { render, screen } from '@testing-library/react';
import CustomCardWithIcon from './CustomCardWithIcon';

jest.mock('../Icon/Icon', () => () => 'Icon-component-mock');

describe('Component: CustomCardWithIcon', () => {
  describe('should render correctly', () => {
    it('when has icon', () => {
      render(
        <CustomCardWithIcon id="my-id" text="My Text" iconName="lendBike" />,
      );

      const title = screen.getByRole('heading', { name: /My Text/i });
      const icon = screen.getByText('Icon-component-mock');

      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('data-testid', 'my-id');

      expect(icon).toBeInTheDocument();
    });

    it('when has no icon', () => {
      render(<CustomCardWithIcon id="my-id" text="My Text" />);

      const title = screen.getByRole('heading', { name: /My Text/i });
      const icon = screen.queryByText('Icon-component-mock');

      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('data-testid', 'my-id');

      expect(icon).not.toBeInTheDocument();
    });
  });
});
