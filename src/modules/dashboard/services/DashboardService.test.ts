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

  it('should return number of black users', () => {
    const mockedUsers = [MockedFirstUser, MockedFirstUser, MockedSecondUser];
    const expectedRacialInfo: ChartDataProps[] = [
      {
        label: 'Parda',
        quantity: 2,
      },
      {
        label: 'Preta',
        quantity: 1,
      },
    ];
    expect(DashboardService.getRacialInfo(mockedUsers)).toStrictEqual(
      expectedRacialInfo,
    );
  });

  it('should return gender of users', () => {
    const mockedUsers = [MockedFirstUser, MockedFirstUser, MockedSecondUser];
    const expectedGenderInfo: ChartDataProps[] = [
      {
        label: 'Masculino',
        quantity: 2,
      },
      {
        label: 'Feminino',
        quantity: 1,
      },
    ];
    expect(DashboardService.getGenderInfo(mockedUsers)).toStrictEqual(
      expectedGenderInfo,
    );
  });

  it('should return schooling of users', () => {
    const mockedUsers = [MockedFirstUser, MockedFirstUser, MockedSecondUser];
    const expectedSchoolingInfo: ChartDataProps[] = [
      {
        label: 'Ensino médio completo',
        quantity: 2,
      },
      {
        label: 'Ensino médio incompleto',
        quantity: 1,
      },
    ];
    expect(DashboardService.getSchoolingInfo(mockedUsers)).toStrictEqual(
      expectedSchoolingInfo,
    );
  });

  it('should return income of users', () => {
    const mockedUsers = [MockedFirstUser, MockedFirstUser, MockedSecondUser];
    const expectedIncomeInfo: ChartDataProps[] = [
      {
        label: 'Entre 350 e 500',
        quantity: 2,
      },
      {
        label: 'Entre 750 e 1100',
        quantity: 1,
      },
    ];
    expect(DashboardService.getIncomeInfo(mockedUsers)).toStrictEqual(
      expectedIncomeInfo,
    );
  });

  it('should return age of users', () => {
    const mockedUsers = [MockedFirstUser, MockedFirstUser, MockedSecondUser];
    const expectedAgeInfo: ChartDataProps[] = [
      {
        label: 'Entre 0 e 10 anos',
        quantity: 2,
      },
      {
        label: 'Entre 31 e 40 anos',
        quantity: 1,
      },
    ];
    expect(DashboardService.getAgeInfo(mockedUsers)).toStrictEqual(
      expectedAgeInfo,
    );
  });
  it('should return array with time of travels', () => {
    const mockedBikes = [MockedBike];
    expect(
      DashboardService.getTimeInMinutesFromTravel(mockedBikes),
    ).toStrictEqual([10, 20, 32]);
  });
});
