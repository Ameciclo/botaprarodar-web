import DashboardService from './DashboardService';
import {
  MockedFirstUser,
  MockedSecondUser,
} from '../../users/mocks/MockedUser';
import { MockedBike } from '../../bicycles/mocks/BikeMocks';
import ChartDataProps from '../../../shared/models/ChartDataProps';

describe('DashboardService', () => {
  it('should return number of travels total', () => {
    const mockedBikes = [MockedBike, MockedBike];
    expect(DashboardService.getTravelsDone(mockedBikes)).toBe(6);
  });

  it('should return number of incidents happened', () => {
    MockedBike.devolutions[0].quiz.problemsDuringRiding = 'Sim';
    MockedBike.devolutions[1].quiz.problemsDuringRiding = 'Não';
    MockedBike.devolutions[2].quiz.problemsDuringRiding = 'Não';
    const mockedBikes = [MockedBike];
    expect(DashboardService.getIncidentsHappened(mockedBikes)).toBe(1);
  });

  it('should return withdrawals reason', () => {
    const expectedWithdrawalsReason: ChartDataProps[] = [
      {
        label: 'Seu local de trabalho',
        quantity: 2,
      },
      {
        label: 'Seu local de compras',
        quantity: 1,
      },
    ];
    MockedBike.devolutions[0].quiz.reason = 'Seu local de trabalho';
    MockedBike.devolutions[1].quiz.reason = 'Seu local de trabalho';
    MockedBike.devolutions[2].quiz.reason = 'Seu local de compras';
    const mockedBikes = [MockedBike];
    expect(DashboardService.getWithdrawalsReason(mockedBikes)).toStrictEqual(
      expectedWithdrawalsReason,
    );
  });

  it('should return destinations', () => {
    const expectedWithdrawalsDestination: ChartDataProps[] = [
      {
        label: 'Hogwarts',
        quantity: 2,
      },
      {
        label: 'Batcaverna',
        quantity: 1,
      },
    ];
    MockedBike.devolutions[0].quiz.destination = 'Hogwarts';
    MockedBike.devolutions[1].quiz.destination = 'Hogwarts';
    MockedBike.devolutions[2].quiz.destination = 'Batcaverna';
    const mockedBikes = [MockedBike];
    expect(DashboardService.getDestinations(mockedBikes)).toStrictEqual(
      expectedWithdrawalsDestination,
    );
  });

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
    MockedFirstUser.userQuiz.alreadyUseBPR = false;
    MockedFirstUser.userQuiz.alreadyUseBPR = true;
    const mockedUsers = [
      MockedSecondUser,
      MockedFirstUser,
      MockedSecondUser,
      MockedFirstUser,
      MockedFirstUser,
    ];
    expect(DashboardService.getNewUsers(mockedUsers)).toBe(3);
  });

  it('should return number of women users', () => {
    const mockedUsers = [
      MockedSecondUser,
      MockedFirstUser,
      MockedSecondUser,
      MockedSecondUser,
      MockedFirstUser,
    ];
    expect(DashboardService.getWomenUsers(mockedUsers)).toBe(3);
  });

  it('should return number of travels with ride given', () => {
    const mockedBikes = [MockedBike, MockedBike];
    expect(DashboardService.getTravelsWithRideGiven(mockedBikes)).toBe(2);
  });
});
