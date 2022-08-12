import { render, screen } from '@testing-library/react';
import CustomCardWithIcon from './CustomCardWithIcon';

jest.mock('../Icon/Icon', () => () => 'Icon-component-mock');

describe('Component: CustomCardWithIcon', () => {
  it('should render correctly', () => {
      render(
        <CustomCardWithIcon id="my-id" text="My Text" iconName="lendBike" iconDescription="Teste" />,
      );

      const title = screen.getByRole('heading', { name: /My Text/i });
      const icon = screen.getByText('Icon-component-mock');

      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('data-testid', 'my-id');

      expect(icon).toBeInTheDocument();
    });
});
