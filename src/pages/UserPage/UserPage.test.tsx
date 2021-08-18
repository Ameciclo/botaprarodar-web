import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserService from '../../services/UserService/UserService';
import UserPage from './UserPage';

jest.mock('../../services/UserService/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

describe('UserPage', () => {
  beforeEach(() => {
    mockedUserService.getAllUsers.mockResolvedValue([
      {
        name: 'Antoni',
        communityId: '-MLDOXs3p35DEHg0gdUU',
        telephone: '+55 51 3626-2001',
        status: true,
        id: '123',
        profilePicture: 'test',
        address: 'Test street',
        docNumber: BigInt(12345678910),
      },
    ]);
  });

  it('should render loading component', async () => {
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
});
