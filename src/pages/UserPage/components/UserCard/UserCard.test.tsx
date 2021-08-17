import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserCard from './UserCard';

test('renders User Card', () => {
  const user = {
    name: 'Test',
    communityId: '123',
    telephone: '32423',
    status: true,
    profilePicture: 'test',
    id: '1',
    address: 'Test street',
    docNumber: BigInt(12345678910),
  };

  const { container } = render(
    <BrowserRouter>
      <UserCard user={user} />
    </BrowserRouter>,
  );
  expect(container).toBeInTheDocument();
});
