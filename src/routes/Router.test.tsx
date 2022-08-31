import { waitFor } from '@testing-library/react';
import { renderWithRouterAndAuth, setUserAuthenticated } from '../setupTests';
import Route from './Route';

describe('route redirections based on authentication', () => {
  it('should render public page', async () => {
    const { getByText } = renderWithRouterAndAuth(
      <Route
        path="/dashboard"
        isPrivate={false}
        comp={() => <div>DashboardPage</div>}
      />,
      { route: '/dashboard' },
    );

    await waitFor(() => expect(getByText('DashboardPage')).toBeInTheDocument());
  });

  it('should redirect to login page when not logged and try to access private page', async () => {
    const { history } = renderWithRouterAndAuth(
      <Route
        path="/selecao-de-comunidades"
        isPrivate
        comp={() => <div>CommunityPage</div>}
      />,
      { route: '/selecao-de-comunidades' },
    );

    expect(history.location.pathname).toEqual('/login');
  });

  it('should render private page when user is logged', async () => {
    setUserAuthenticated();

    const { getByText } = renderWithRouterAndAuth(
      <Route
        path="/selecao-de-comunidades"
        isPrivate
        comp={() => <div>CommunityPage</div>}
      />,
      { route: '/selecao-de-comunidades' },
    );

    await waitFor(() => expect(getByText('CommunityPage')).toBeInTheDocument());
  });
});
