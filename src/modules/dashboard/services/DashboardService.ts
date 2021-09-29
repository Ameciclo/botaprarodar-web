import BikeService from 'modules/bicycles/services/BikeService';
import CommunityService from 'modules/communities/services/CommunityService';
import User from 'modules/users/models/User';
import UserService from 'modules/users/services/UserService';
import ChartDataProps from 'shared/models/ChartDataProps';
import StringUtils from 'shared/utils/StringUtils';
import Bike from '../../bicycles/models/Bike';
import Community from '../../communities/models/Community';
import { GenderTypes } from '../../users/models/GenderTypes';
import DashboardInfo from '../models/DashboardInfo';

const DashboardInfoInitialValues: DashboardInfo = {
  usersQuantity: 0,
  newUsers: 0,
  womenUsers: 0,
  communitiesQuantity: 0,
  bikesQuantity: 0,
  bikesInUse: 0,
  bikesPerCommunities: [],
  withdrawalsPerCommunities: [],
  travelsDone: 0,
  travelsWithRideGiven: 0,
  incidentsHappened: 0,
  withdrawalsReason: [],
  bikersCommunities: [],
  destination: [],
  racialInfo: [],
  gender: [],
  schooling: [],
  income: [],
  age: [],
  travelTimeInMinutes: [],
};

const DashboardService = {
  async dashboardInfo() {
    const communitiesData: Community[] =
      await CommunityService.getAllCommunities();

    const bikesData: Bike[] = await BikeService.getAllBikes();

    const usersData: User[] = await UserService.getAllUsers();

    return this.mapResultToData(communitiesData, bikesData, usersData);
  },

  mapResultToData(
    communitiesData: Community[],
    bikesData: Bike[],
    usersData: User[],
  ): DashboardInfo {
    const dashboardInfo: DashboardInfo = DashboardInfoInitialValues;

    dashboardInfo.usersQuantity = usersData.length;
    dashboardInfo.communitiesQuantity = communitiesData.length;
    dashboardInfo.bikesQuantity = bikesData.length;

    dashboardInfo.destination = this.getDestinations(bikesData);
    dashboardInfo.bikesInUse = this.getBikesInUseQuantity(bikesData);
    dashboardInfo.newUsers = this.getNewUsers(usersData);
    dashboardInfo.womenUsers = this.getWomenUsers(usersData);
    dashboardInfo.travelsWithRideGiven =
      this.getTravelsWithRideGiven(bikesData);
    dashboardInfo.incidentsHappened = this.getIncidentsHappened(bikesData);
    dashboardInfo.travelsDone = this.getTravelsDone(bikesData);
    dashboardInfo.withdrawalsReason = this.getWithdrawalsReason(bikesData);
    dashboardInfo.racialInfo = this.getRacialInfo(usersData);
    dashboardInfo.gender = this.getGenderInfo(usersData);
    dashboardInfo.schooling = this.getSchoolingInfo(usersData);
    dashboardInfo.age = this.getAgeInfo(usersData);
    dashboardInfo.income = this.getIncomeInfo(usersData);
    dashboardInfo.travelTimeInMinutes =
      this.getTimeInMinutesFromTravel(bikesData);

    return dashboardInfo;
  },

  getTravelsDone(bikesData: Bike[]): number {
    let travelsDone = 0;
    bikesData.forEach(bike => {
      if (bike.devolutions?.length > 0) {
        travelsDone += bike.devolutions?.length;
      }
    });
    return travelsDone;
  },

  getIncidentsHappened(bikesData: Bike[]): number {
    let incidents = 0;
    bikesData.forEach(bike => {
      if (bike.devolutions && bike.devolutions.length > 0) {
        bike.devolutions.forEach(devolution => {
          incidents += devolution.quiz.problemsDuringRiding === 'Sim' ? 1 : 0;
        });
      }
    });
    return incidents;
  },

  getWithdrawalsReason(bikesData: Bike[]): ChartDataProps[] {
    const withdrawalsReason: string[] = [];
    bikesData.forEach(bike =>
      bike.devolutions?.forEach(devolution =>
        withdrawalsReason.push(devolution.quiz.reason),
      ),
    );
    return this.groupArrayToChartDataProps(withdrawalsReason);
  },

  getDestinations(bikeArray: Bike[]): ChartDataProps[] {
    const allDestinations: string[] = [];
    bikeArray.forEach(bike => {
      bike.devolutions?.forEach(devolution => {
        allDestinations.push(
          StringUtils.capitalizeString(devolution.quiz.destination),
        );
      });
    });
    return this.groupArrayToChartDataProps(allDestinations)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 10);
  },

  groupArrayToChartDataProps(allItems: string[]): ChartDataProps[] {
    const mapGrouped = new Map();
    const chartDataProps: ChartDataProps[] = [];
    allItems.forEach(item => {
      const collection = mapGrouped.get(item);
      if (!collection) {
        mapGrouped.set(item, [1]);
      } else {
        collection.push(1);
      }
    });
    mapGrouped.forEach((value, key) => {
      chartDataProps.push({
        label: key,
        quantity: value.length,
      });
    });
    return chartDataProps.sort((a, b) => b.quantity - a.quantity);
  },

  getBikesInUseQuantity(bikeArray: Bike[]): number {
    return bikeArray.filter(bike => bike.inUse).length;
  },

  getNewUsers(users: User[]): number {
    return users.filter(user => user.userQuiz?.alreadyUseBPR).length;
  },

  getWomenUsers(users: User[]): number {
    return users.filter(user => user.gender === GenderTypes.Feminino).length;
  },

  getTravelsWithRideGiven(bikes: Bike[]): number {
    return bikes.filter(bike =>
      bike.devolutions?.filter(devolution => devolution.quiz?.giveRide),
    ).length;
  },

  getRacialInfo(users: User[]): ChartDataProps[] {
    const result = [] as string[];

    users.forEach(user => {
      let racial: string;
      if (user.racial) {
        racial = StringUtils.normalizeRacialInfo(user.racial);
      } else {
        racial = StringUtils.normalizeRacialInfo('não informado');
      }
      result.push(racial);
    });

    return this.groupArrayToChartDataProps(result);
  },

  getGenderInfo(users: User[]): ChartDataProps[] {
    const genderArray = users.map(user => {
      return GenderTypes[user.gender];
    });
    return this.groupArrayToChartDataProps(genderArray);
  },

  getSchoolingInfo(users: User[]): ChartDataProps[] {
    const schoolingArray = users.map(user => {
      return StringUtils.normalizeSchoolingInfo(user.schooling);
    });
    return this.groupArrayToChartDataProps(schoolingArray);
  },

  getAgeInfo(users: User[]): ChartDataProps[] {
    const result: string[] = [];
    users.forEach(user => {
      result.push(StringUtils.normalizeAgeInfo(user));
    });
    return this.groupArrayToChartDataProps(result);
  },

  getIncomeInfo(users: User[]): ChartDataProps[] {
    const result = users
      .map(item => item?.income)
      .map(item => {
        const array = String(item).split('.');
        if (array.length >= 2) {
          if (array[1].length > 2) {
            return StringUtils.normalizeIncomeInfo(array.join(''));
          }
        }
        return StringUtils.normalizeIncomeInfo(array[0]);
      });

    return this.groupArrayToChartDataProps(result);
  },

  getTimeInMinutesFromTravel(bikes: Bike[]): number[] {
    interface TravelTime {
      withdrawTime?: string;
      devolutionTime: string;
      interval: number;
    }

    const allTravelsTime: TravelTime[] = [];

    bikes.forEach(bike => {
      bike.devolutions?.forEach(devolution => {
        const withdrawFromDevolution = bike.withdraws?.find(
          withdraw => withdraw.id === devolution.withdrawId,
        );
        if (withdrawFromDevolution) {
          allTravelsTime.push({
            withdrawTime: withdrawFromDevolution?.date,
            devolutionTime: devolution.date,
            interval: StringUtils.intervalInMinutesBetweenDates(
              withdrawFromDevolution?.date,
              devolution.date,
            ),
          });
        }
      });
    });
    return allTravelsTime.map(travelTime => {
      return travelTime.interval;
    });
  },
};
export default DashboardService;
