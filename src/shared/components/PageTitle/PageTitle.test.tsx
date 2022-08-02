import { render, screen } from '@testing-library/react';
import PageTitle from './PageTitle';

jest.mock('../Icon/Icon', () => () => 'Icon-component-mock');

describe('Component: PageTitle', () => {
  describe('shoud render correctly', () => {
    it('when has icon', () => {
      render(<PageTitle id="my-id" text="My Text" iconName="gear" />);

      const title = screen.getByRole('heading', { name: /My Text/i });
      const icon = screen.getByText('Icon-component-mock');

      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('data-testid', 'my-id');

      expect(icon).toBeInTheDocument();
    });

    it('when has not icon', () => {
      render(<PageTitle id="my-id" text="My Text" />);

      const title = screen.getByRole('heading', { name: /My Text/i });
      const icon = screen.queryByText('Icon-component-mock');

      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('data-testid', 'my-id');

      expect(icon).not.toBeInTheDocument();
    });
  });
});
