import { dashboardMock } from '../../mocks/DashboardService/DashboardService.mock';
import DashboardService from './DashboardService';

describe('DashboardService', () => {
  it('should return dashboard info', async () => {
    jest.doMock('firebase/app', () => {
      const data = dashboardMock;
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

    const data = await DashboardService.dashboardInfo();
    expect(data.constructor).toEqual(Object);
  });

  // it('should return an error', async () => {
  //   jest.mock('firebase/app', () => {
  //     return {
  //       initializeApp: jest.fn().mockReturnValue({
  //         database: jest.fn().mockReturnValue({
  //           ref: jest.fn().mockReturnThis(),
  //           once: jest.fn(() => Promise.reject(new Error())),
  //         }),
  //       }),
  //     };
  //   });

  //   const data = await DashboardService.getAllUsers();
  //   expect(data).toBeDefined();
  // });
});
