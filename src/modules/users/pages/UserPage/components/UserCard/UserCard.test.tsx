import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserService from 'modules/users/services/UserService';
import UserCard from './UserCard';
import { MockedFirstUser } from 'modules/users/mocks/MockedUser';

jest.mock('modules/users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

let container: HTMLElement;

const mockUser = MockedFirstUser;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <UserCard user={mockUser} />
    </BrowserRouter>,
  ).container;
});

describe('User Card', () => {
  it('renders User Card', () => {
    expect(container).toBeInTheDocument();
  });

  it('should block user successfully', async () => {
    expect(screen.queryByTestId('lock-icon')).not.toBeInTheDocument();
    mockedUserService.setUserBlock.mockResolvedValue({ isBlocked: true });

    act(() => {
      fireEvent.click(screen.getByText('Bloquear'));
    });

    await waitFor(() => {
      expect(mockedUserService.setUserBlock).toHaveBeenCalledWith(
        mockUser.id,
        !mockUser.isBlocked,
      );
      expect(screen.getByTestId('lock-icon')).toBeInTheDocument();
    });
  });

  it('should not show lock when block request was not successful', async () => {
    expect(screen.queryByTestId('lock-icon')).not.toBeInTheDocument();
    mockedUserService.setUserBlock.mockRejectedValue({ isBlocked: false });

    act(() => {
      fireEvent.click(screen.getByText('Bloquear'));
    });

    await waitFor(() => {
      expect(mockedUserService.setUserBlock).toHaveBeenCalledWith(
        mockUser.id,
        !mockUser.isBlocked,
      );
      expect(screen.queryByTestId('lock-icon')).not.toBeInTheDocument();
    });
  });

  it('should unblock user successfully', async () => {
    mockUser.isBlocked = true;
    render(
      <BrowserRouter>
        <UserCard user={mockUser} />
      </BrowserRouter>,
    );
    expect(screen.queryByTestId('lock-icon')).toBeInTheDocument();
    mockedUserService.setUserBlock.mockResolvedValue({ isBlocked: false });

    act(() => {
      fireEvent.click(screen.getByText('Desbloquear'));
    });

    await waitFor(() => {
      expect(mockedUserService.setUserBlock).toHaveBeenCalledWith(
        mockUser.id,
        !mockUser.isBlocked,
      );
      expect(screen.queryByTestId('lock-icon')).not.toBeInTheDocument();
    });
  });
});
