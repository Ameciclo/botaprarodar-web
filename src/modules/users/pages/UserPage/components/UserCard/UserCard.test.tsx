import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserService from 'modules/users/services/UserService';
import UserCard from './UserCard';

jest.mock('modules/users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

let container: HTMLElement;

const mockUser = {
  name: 'Test',
  communityId: '123',
  telephone: '32423',
  status: true,
  profilePicture: 'test',
  id: '1',
  address: 'Test street',
  docNumber: BigInt(12345678910),
  isBlocked: false,
};

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
    mockedUserService.toggleUserBlock.mockResolvedValue({ isBlocked: true });

    act(() => {
      fireEvent.click(screen.getByText('Bloquear'));
    });

    await waitFor(() => {
      expect(mockedUserService.toggleUserBlock).toHaveBeenCalledWith(
        mockUser.id,
        !mockUser.isBlocked,
      );
      expect(screen.getByTestId('lock-icon')).toBeInTheDocument();
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
    mockedUserService.toggleUserBlock.mockResolvedValue({ isBlocked: false });

    act(() => {
      fireEvent.click(screen.getByText('Desbloquear'));
    });

    await waitFor(() => {
      expect(mockedUserService.toggleUserBlock).toHaveBeenCalledWith(
        mockUser.id,
        !mockUser.isBlocked,
      );
      expect(screen.queryByTestId('lock-icon')).not.toBeInTheDocument();
    });
  });
});
