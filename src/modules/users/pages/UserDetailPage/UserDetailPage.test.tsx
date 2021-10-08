import { act, render, waitFor } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import UserDetailPage from './UserDetailPage';
import UserService from '../../services/UserService';
import { MockedFirstUser } from '../../mocks/MockedUser';
import Route from '../../../../routes/Route';

jest.mock('../../services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

it('should render user detail page', async () => {
  mockedUserService.getUserById.mockResolvedValue(MockedFirstUser);

  const route = '/usuarios/123';
  const history = createMemoryHistory({ initialEntries: [route] });
  let container: HTMLElement;
  act(() => {
    container = render(
      <BrowserRouter>
        <Router history={history}>
          <Route isPrivate={false} path={route} comp={UserDetailPage} />
        </Router>
      </BrowserRouter>,
    ).container;
  });

  await waitFor(() => {
    expect(container).toBeInTheDocument();
  });
});
