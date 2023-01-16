import { act, waitFor } from '@testing-library/react';
import api from '../../../shared/services/api';
import { MockedFirstUser, MockedSecondUser } from '../mocks/MockedUser';
import User from '../models/User';
import DashboardService from '../../dashboard/services/DashboardService';
import UserService from './UserService';

jest.mock('shared/services/api');
jest.mock('../../dashboard/services/DashboardService');

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

  it('should remove empty spaces in the end of name and address properties', async () => {
    const userBody = {
      name: 'name with space  ',
      createDate: new Date(),
      address: 'address with end space  ',
      gender: 'Outro',
      profilePicture: '',
      age: '11/11/2000',
      racial: 'Outra/Não deseja informar',
      schooling: 'Não informado',
      schoolingStatus: 'Em curso',
      income: '150-300',
      communityId: 'MLDOXs3p35DEHg0gdUU',
      telephone: '71 99999-9999',
      id: '-MX3cVfnbxJQo6Pt0TJH',
      isBlocked: false,
      userQuiz: {
        alreadyUseBPR: false,
        motivation: 0,
        motivationOpenQuestion: '',
        alreadyAccidentVictim: '',
        problemsOnWayOpenQuestion: '',
        timeOnWayOpenQuestion: '30:00',
      },
    };

    mockedApi.put.mockResolvedValue({ data: {} });
    await UserService.createUser(userBody);
    const payloadParams = mockedApi.put.mock.calls[0][1];
    console.log(payloadParams);
    expect(payloadParams.name).toBe('name with space');
    expect(payloadParams.address).toBe('address with end space');
  });
});

// it('should remove empty spaces in the end of name and address properties', async () => {
//   const userBody = {
//     name: 'name with space  ',
//     createDate: new Date(),
//     address: 'address with end space  ',
//     gender: 'Outro',
//     profilePicture: '',
//     age: '11/11/2000',
//     racial: 'Outra/Não deseja informar',
//     schooling: 'Não informado',
//     schoolingStatus: 'Em curso',
//     income: '150-300',
//     communityId: 'MLDOXs3p35DEHg0gdUU',
//     telephone: '71 99999-9999',
//     id: '-MX3cVfnbxJQo6Pt0TJH',
//     isBlocked: false,
//     userQuiz: {
//       alreadyUseBPR: false,
//       motivation: 0,
//       motivationOpenQuestion: '',
//       alreadyAccidentVictim: '',
//       problemsOnWayOpenQuestion: '',
//       timeOnWayOpenQuestion: '30:00',
//     },
//   };

// //   const expectedUserData = {
//     name: 'name with space',
//     createDate: new Date(),
//     address: 'address with end space',
//     gender: 'Outro',
//     profilePicture: '',
//     age: '11/11/2000',
//     racial: 'Outra/Não deseja informar',
//     schooling: 'Não informado',
//     schoolingStatus: 'Em curso',
//     income: '150-300',
//     communityId: 'MLDOXs3p35DEHg0gdUU',
//     telephone: '71 99999-9999',
//     id: '-MX3cVfnbxJQo6Pt0TJH',
//     isBlocked: false,
//     userQuiz: {
//       alreadyUseBPR: false,
//       motivation: 0,
//       motivationOpenQuestion: '',
//       alreadyAccidentVictim: '',
//       problemsOnWayOpenQuestion: '',
//       timeOnWayOpenQuestion: '30:00',
//     },
//   };
//   const data = await UserService.createUser(userBody);
//   expect(data.name).toBe(expectedUserData.name);
//   expect(data.name).toBe(expectedUserData.name);
// });
