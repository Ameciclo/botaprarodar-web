import { act, render, screen } from '@testing-library/react';
import UserService from '../../services/UserService/UserService';
import UserPage from './UserPage';

describe('UserPage', () => {
  beforeEach(() => {
    jest.spyOn(UserService, 'getAllUsers').mockResolvedValue([
      {
        name: 'Antoni',
        communityId: '-MLDOXs3p35DEHg0gdUU',
        telephone: '+55 51 3626-2001',
        status: true,
      },
    ]);
  });

  it('should list users', async () => {
    await act(async () => {
      await render(<UserPage />);
      const userList = await screen.getByTestId('userList');
      expect(userList).toBeInTheDocument();
    });

    expect(await screen.findByText('Antoni'));
    // expect(await screen.findByText('123456'));
  });
});
