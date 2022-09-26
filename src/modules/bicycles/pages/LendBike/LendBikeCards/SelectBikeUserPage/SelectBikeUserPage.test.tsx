import { BrowserRouter } from 'react-router-dom';
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import UserService from '../../../../../users/services/UserService';
import {
  MockedFirstUser,
  MockedSecondUser,
} from '../../../../../users/mocks/MockedUser';
import SelectBikeUserPage from './SelectBikeUserPage';

jest.mock('../../../../../users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

describe('UserPage', () => {
  it('should render loading component', async () => {
    mockedUserService.getUsersByCommunity.mockResolvedValue([MockedFirstUser]);
    act(() => {
      render(
        <BrowserRouter>
          <SelectBikeUserPage />
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
    mockedUserService.getUsersByCommunity.mockResolvedValue([
      MockedFirstUser,
      MockedSecondUser,
    ]);

    await act(async () => {
      render(
        <BrowserRouter>
          <SelectBikeUserPage />
        </BrowserRouter>,
      );
    });

    expect(screen.getByTestId('userList')).toBeInTheDocument();
  });

  it('should render no users and an empty state message', async () => {
    mockedUserService.getUsersByCommunity.mockResolvedValue([]);
    await act(async () => {
      render(
        <BrowserRouter>
          <SelectBikeUserPage />
        </BrowserRouter>,
      );
    });

    expect(
      screen.getByText('Nenhuma usuária com esse nome!'),
    ).toBeInTheDocument();
  });
});
