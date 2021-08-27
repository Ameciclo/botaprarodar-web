import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserService from 'modules/users/services/UserService';
import UserCard from './UserCard';

jest.mock('modules/users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

let container: HTMLElement;

beforeEach(() => {
  const user = {
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

  container = render(
    <BrowserRouter>
      <UserCard user={user} />
    </BrowserRouter>,
  ).container;
});

it('renders User Card', () => {
  expect(container).toBeInTheDocument();
});

xit('should block user successfully', async () => {
  mockedUserService.toggleUserBlock.mockResolvedValue({ isBlocked: true });

  fireEvent.click(screen.getByText('user-menu-test'));
});
