import { render, screen } from '@testing-library/react';
import { LogoBPR } from 'shared/assets';
import Logo from './Logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(<Logo />);

    const logo = screen.getByTestId('logo');
    const alt = screen.getByAltText('Logo do projeto Bota pra rodar');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', LogoBPR);
    expect(alt).toBeInTheDocument();
  });
});
