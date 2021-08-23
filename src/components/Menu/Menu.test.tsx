import { fireEvent } from '@testing-library/react';
import Menu from './Menu';
import {
  renderWithRouterAndAuth,
  setUserAuthentication,
} from '../../setupTests';

describe('Menu', () => {
  it('renders without error', () => {
    const { container } = renderWithRouterAndAuth(<Menu />);
    expect(container).toBeInTheDocument();
  });

  it('renders logout button when user is logged', () => {
    setUserAuthentication();

    const { getByText } = renderWithRouterAndAuth(<Menu />);

    expect(getByText('Sair')).toBeInTheDocument();
  });

  it('does not render logout button when user is not logged', () => {
    const { queryByText } = renderWithRouterAndAuth(<Menu />);

    expect(queryByText('Sair')).not.toBeInTheDocument();
  });

  it('should redirect to given page when click in menu item', () => {
    setUserAuthentication();
    const { getByText, history } = renderWithRouterAndAuth(<Menu />);

    fireEvent.click(getByText('Comunidades'));

    expect(history.location.pathname).toBe('/comunidades');
  });
});
