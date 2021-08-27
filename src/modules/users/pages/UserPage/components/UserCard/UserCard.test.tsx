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
import { exists } from 'fs';

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
    expect(screen.queryByText(`${mockUser.name} bloqueado(a)`));
  });
});
