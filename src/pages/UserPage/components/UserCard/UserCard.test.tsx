import React from 'react';
import { render } from '@testing-library/react';
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

  const { container } = render(<UserCard user={user} />);
  expect(container).toBeInTheDocument();
});
