import { act, waitFor } from '@testing-library/react';
import UserService from './UserService';
import api from '../../../shared/services/api';
import { MockedFirstUser, MockedSecondUser } from '../mocks/MockedUser';
import User from '../models/User';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedApiUsersResponse = {
  data: {
    '123': MockedFirstUser,
    '321': MockedSecondUser,
  },
};
const mockedUsers = [MockedFirstUser, MockedSecondUser];

describe('User Service', () => {
  it('should get all users', async () => {
    mockedApi.get.mockResolvedValue(mockedApiUsersResponse);
    let data: User[];

    await act(async () => {
      data = await UserService.getAllUsers();
    });

    expect(mockedApi.get).toHaveBeenCalledWith('/users.json');
    await waitFor(() => expect(data).toStrictEqual(mockedUsers));
  });

  it('should get user by ID', async () => {
    mockedApi.get.mockResolvedValue({
      data: {
        '123': MockedFirstUser,
      },
    });
    let data: User[];

    await act(async () => {
      data = await UserService.getUserById('123');
    });

    expect(mockedApi.get).toHaveBeenCalledWith('/users/123.json');
    await waitFor(() =>
      expect(data).toStrictEqual({
        '123': MockedFirstUser,
      }),
    );
  });
});
