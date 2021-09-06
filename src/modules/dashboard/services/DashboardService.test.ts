import DashboardService from './DashboardService';
import {
  MockedFemaleUser,
  MockedMaleUser,
} from '../../users/mocks/MockedMaleUser';
import { MockedBike } from '../../bicycles/mocks/BikeMocks';

describe('DashboardService', () => {
  it('should return number of bikes in use', () => {
    const mockedBikes = [];
    mockedBikes.push(
      { ...MockedBike, inUse: false },
      { ...MockedBike, inUse: false },
      { ...MockedBike, inUse: true },
      { ...MockedBike, inUse: true },
    );
    expect(DashboardService.getBikesInUseQuantity(mockedBikes)).toBe(2);
  });

  it('should return number of new users', () => {
    MockedMaleUser.userQuiz.alreadyUseBPR = false;
    MockedFemaleUser.userQuiz.alreadyUseBPR = true;
    const mockedUsers = [
      MockedMaleUser,
      MockedFemaleUser,
      MockedMaleUser,
      MockedFemaleUser,
      MockedFemaleUser,
    ];
    expect(DashboardService.getNewUsers(mockedUsers)).toBe(3);
  });

  it('should return number of women users', () => {
    const mockedUsers = [
      MockedMaleUser,
      MockedFemaleUser,
      MockedMaleUser,
      MockedFemaleUser,
      MockedFemaleUser,
    ];
    expect(DashboardService.getWomenUsers(mockedUsers)).toBe(3);
  });

  it('should return number of travels with ride given', () => {
    const mockedBikes = [MockedBike, MockedBike];
    expect(DashboardService.getTravelsWithRideGiven(mockedBikes)).toBe(2);
  });
});
