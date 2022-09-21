import { BrowserRouter } from 'react-router-dom';
import {
  act,
  screen,
} from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import UserService from '../../../../../users/services/UserService';
import { mockedUser } from '../../../../../users/mocks/MockedUser';
import SelectBikeUserPage from './SelectBikeUserPage';

jest.mock('../../../../../users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

describe('SelectBikeUserPage', () => {
  describe('when has state params', () => {
    it('should render correctly', async () => {
      mockedUserService.getAllUsers.mockResolvedValue([mockedUser()]);
      await act(() => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <SelectBikeUserPage />
          </BrowserRouter>,
        );
      });

      const card = screen.getByTestId('select-bike-page');
      expect(card).toBeInTheDocument();
    });
  });
});
