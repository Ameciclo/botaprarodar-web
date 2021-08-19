import { render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { CommunityPage } from 'pages';
import { Router } from 'react-router-dom';
import Route from './Route';
import { AuthProvider, useAuth, useHandleAuth } from '../context/AuthContext';
import AuthInterface from '../models/Auth/AuthInterface';

const history = createMemoryHistory({ initialEntries: ['/comunidades'] });

describe('route redirections based on authentication', () => {
  it('should redirect to login page when no user is logged', async () => {
    const { container } = render(
      <Router history={history}>
        <Route path="/comunidades" isPrivate comp={CommunityPage} />
        <Route path="/login" comp={() => <div>/login</div>} />
      </Router>,
    );
    await waitFor(() =>
      expect(container.innerHTML).toEqual(expect.stringContaining('/login')),
    );
  });

  xit('should not redirect to login page when user is logged', async () => {
    const mockedUser: AuthInterface = {
      authenticated: true,
      email: 'email@example.com',
      displayName: 'John Smith',
    };
    const { onChange } = useHandleAuth();
    onChange(mockedUser);

    const { container } = render(
      <AuthProvider>
        <Router history={history}>
          <Route path="/comunidades" isPrivate comp={CommunityPage} />
          <Route path="/login" comp={() => <div>/login</div>} />
        </Router>
      </AuthProvider>,
    );
    await waitFor(() =>
      expect(container.innerHTML).toEqual(
        expect.stringContaining('Comunidades'),
      ),
    );
  });
});
