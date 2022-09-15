import { act, waitFor } from '@testing-library/react';
import api from '../../../shared/services/api';
import { MockedFirstUser, MockedSecondUser } from '../mocks/MockedUser';
import User from '../models/User';
import UserService from './UserService';

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

  it('should validate if user is admin', async () => {
    const isAdminMockedResponse = {
      data: {
        userId: {
          email: 'admin@teste.com',
          uid: 'userId',
        },
      },
    };

    mockedApi.get.mockResolvedValue(isAdminMockedResponse);
    let data: boolean;

    await act(async () => {
      data = await UserService.isUserAdmin('userId');
    });

    expect(mockedApi.get).toHaveBeenCalledWith('/admins/userId.json');
    await waitFor(() => expect(data).toBeTruthy());
  });

  it('should validate if user is not an admin', async () => {
    mockedApi.get.mockResolvedValue([]);
    let data: boolean;

    await act(async () => {
      data = await UserService.isUserAdmin('userNotAdminId');
    });

    expect(mockedApi.get).toHaveBeenCalledWith('/admins/userNotAdminId.json');
    await waitFor(() => expect(data).toBeFalsy());
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

  it('should toggle user block', async () => {
    mockedApi.patch.mockResolvedValue({
      data: { isBlocked: true },
    });

    await act(async () => {
      await UserService.setUserBlock('123', true);
    });

    expect(mockedApi.patch).toHaveBeenCalledWith('/users/123.json', {
      isBlocked: true,
    });
  });

  it('should get users by community ID', async () => {
    mockedApi.get.mockResolvedValue(mockedApiUsersResponse);
    let data: User[];
    const communityId = '-MLDOXs3p35DEHg0gdUU';

    await act(async () => {
      data = await UserService.getUsersByCommunity(communityId);
    });

    expect(mockedApi.get).toHaveBeenCalledWith('/users.json');
    await waitFor(() =>
      data.forEach(user => {
        expect(user.communityId).toBe(communityId);
      }),
    );
  });
});
