import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserService from '../../services/UserService';
import UserPage from './UserPage';
import { MockedMaleUser } from '../../mocks/MockedMaleUser';

jest.mock('../../services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

describe('UserPage', () => {
  it('should render loading component', async () => {
    mockedUserService.getAllUsers.mockResolvedValue([MockedMaleUser]);
    act(() => {
      render(
        <BrowserRouter>
          <UserPage />
        </BrowserRouter>,
      );
    });
    const loadingText = screen.getByText('Carregando, por favor aguarde...');
    expect(loadingText).toBeInTheDocument();
    await waitForElementToBeRemoved(() =>
      screen.getByText('Carregando, por favor aguarde...'),
    );
  });

  it('should render list of users', async () => {
    mockedUserService.getAllUsers.mockResolvedValue([MockedMaleUser]);

    await act(async () => {
      render(
        <BrowserRouter>
          <UserPage />
        </BrowserRouter>,
      );
    });

    expect(screen.getByTestId('userList')).toBeInTheDocument();
    expect(screen.getByText('Antoni')).toBeInTheDocument();
  });

  it('should render no users and an empty state message', async () => {
    mockedUserService.getAllUsers.mockResolvedValue([]);
    await act(async () => {
      render(
        <BrowserRouter>
          <UserPage />
        </BrowserRouter>,
      );
    });

    expect(screen.getByText('Nenhuma usuária cadastrada!')).toBeInTheDocument();
  });
});
