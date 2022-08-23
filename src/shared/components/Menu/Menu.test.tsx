import { fireEvent } from '@testing-library/react';
import {
  renderWithRouterAndAuth,
  setUserAuthenticated,
} from '../../../setupTests';
import Menu from './Menu';

describe('Menu', () => {
  it('renders without error', () => {
    const { container } = renderWithRouterAndAuth(<Menu />);
    expect(container).toBeInTheDocument();
  });

  it('renders only logout button when user is logged', () => {
    setUserAuthenticated();

    const { queryByText } = renderWithRouterAndAuth(<Menu />);

    expect(queryByText('Sair')).toBeInTheDocument();
    expect(queryByText('Login')).not.toBeInTheDocument();
  });

  it('should redirect to given page when click in menu item', () => {
    setUserAuthenticated();
    const { getByText, history } = renderWithRouterAndAuth(<Menu />);

    fireEvent.click(getByText('Comunidades'));

    expect(history.location.pathname).toBe('/selecao-de-comunidades');
  });

  it('should redirect to login page when click in logout button', () => {
    setUserAuthenticated();
    const { getByText, history } = renderWithRouterAndAuth(<Menu />);

    fireEvent.click(getByText('Sair'));

    expect(history.location.pathname).toBe('/');
  });
});
