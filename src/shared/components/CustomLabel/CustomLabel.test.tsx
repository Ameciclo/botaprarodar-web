import { render, screen } from '@testing-library/react';
import CustomLabel from './CustomLabel';

describe('Component: CustomLabel', () => {
  describe('shoud render correctly', () => {
    it('when has total amount', () => {
      render(<CustomLabel text="Nome da quantidade" total={10} />);

      const title = screen.getByRole('heading', {
        name: /Nome da quantidade/i,
      });
      const total = screen.getByText(10);
      expect(title).toBeInTheDocument();
      expect(total).toBeInTheDocument();
    });

    it('when has no total amount', () => {
      render(<CustomLabel text="Nome da quantidade" />);

      const title = screen.getByRole('heading', {
        name: /Nome da quantidade/i,
      });
      const total = screen.getByText(0);

      expect(title).toBeInTheDocument();
      expect(total).toBeInTheDocument();
    });

    it('when has no variant color', () => {
      render(<CustomLabel text="Nome da quantidade" />);

      const content = screen.getByTestId('content');

      expect(content).toHaveStyle('background : rgb(255, 255, 255)');
      expect(content).toHaveStyle('color : rgb(0, 0, 0)');
    });

    it('when has variant color', () => {
      render(<CustomLabel text="Nome da quantidade" variant="primary" />);

      const content = screen.getByTestId('content');

      expect(content).toHaveStyle('background : rgb(63, 81, 181)');
      expect(content).toHaveStyle('color :  rgb(255, 255, 255)');
    });
  });
});
