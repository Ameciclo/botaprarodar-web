import DashboardService from './DashboardService';
import {
  MockedFemaleUser,
  MockedMaleUser,
} from '../../users/mocks/MockedMaleUser';
import { MockedBike } from '../../bicycles/mocks/BikeMocks';

describe('DashboardService', () => {
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
