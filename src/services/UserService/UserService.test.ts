import UserService from './UserService';

describe('UserService', () => {
  it('should return all users', async () => {
    jest.mock('firebase/app', () => {
      const data = [
        {
          name: 'Antoni',
          communityId: '-MLDOXs3p35DEHg0gdUU',
          telephone: '+55 51 3626-2001',
          status: true,
        },
      ];
      const snapshot = { val: () => data };
      return {
        initializeApp: jest.fn().mockReturnValue({
          database: jest.fn().mockReturnValue({
            ref: jest.fn().mockReturnThis(),
            once: jest.fn(() => Promise.resolve(snapshot)),
          }),
        }),
      };
    });

    const data = await UserService.getAllUsers();
    expect(data.constructor).toEqual(Array);
  });

  it('should return an error', async () => {
    jest.mock('firebase/app', () => {
      return {
        initializeApp: jest.fn().mockReturnValue({
          database: jest.fn().mockReturnValue({
            ref: jest.fn().mockReturnThis(),
            once: jest.fn(() => Promise.reject(new Error())),
          }),
        }),
      };
    });

    const data = await UserService.getAllUsers();
    expect(data).toBeDefined();
  });
});
