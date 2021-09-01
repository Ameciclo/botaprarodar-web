/* eslint-disable no-console */
import BikeService from 'modules/bicycles/services/BikeService';
import CommunityService from 'modules/communities/services/CommunityService';
import User from 'modules/users/models/User';
import UserService from 'modules/users/services/UserService';
import ChartDataProps from 'shared/models/ChartDataProps';
import Bike from '../../bicycles/models/Bike';
import Community from '../../communities/models/Community';
import { BikesPerCommunities } from '../models/BikesPerCommunities';
import DashboardInfo from '../models/DashboardInfo';
import { GenderTypes } from '../../users/models/GenderTypes';

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
};

const DashboardService = {
  async dashboardInfo() {
    const communitiesData: Community[] =
      await CommunityService.getAllCommunities();

    const bikesData: Bike[] = await BikeService.getAllBikes();

    const usersData: User[] = await UserService.getAllUsers();

    return mapResultToData(communitiesData, bikesData, usersData);
  },
};

const mapResultToData = (
  communitiesData: Community[],
  bikesData: Bike[],
  usersData: User[],
): DashboardInfo => {
  const dashboardInfo: DashboardInfo = DashboardInfoInitialValues;

  dashboardInfo.usersQuantity = usersData.length;
  dashboardInfo.communitiesQuantity = communitiesData.length;
  dashboardInfo.bikesQuantity = bikesData.length;
  dashboardInfo.bikesPerCommunities = communitiesData
    .map(community => {
      let quantity = 0;
      const bikes: Bike[] = [];

      bikesData.forEach(bike => {
        if (bike.communityId === community.id) {
          bikes.push(bike);
          quantity += 1;
        }
      });

      return {
        label: community.name,
        quantity,
        bikes,
      };
    })
    .filter(item => item.quantity > 0);

  dashboardInfo.withdrawalsPerCommunities = setWithdrawalsPerCommunities(
    dashboardInfo.bikesPerCommunities,
  );

  dashboardInfo.destination = getDestinations(bikesData);

  dashboardInfo.bikesInUse = getBikesInUseQuantity(bikesData);

  dashboardInfo.newUsers = getNewUsers(usersData);

  dashboardInfo.womenUsers = getWomenUsers(usersData);

  dashboardInfo.travelsWithRideGiven = getTravelsWithRideGiven(bikesData);

  const withdrawalsReason: string[] = [];
  bikesData.forEach(bike => {
    if (bike.devolutions && bike.devolutions.length > 0) {
      dashboardInfo.travelsDone += bike.devolutions.length;
      bike.devolutions.forEach(devolution => {
        dashboardInfo.incidentsHappened +=
          devolution.quiz.problemsDuringRiding === 'Sim' ? 1 : 0;
        withdrawalsReason.push(devolution.quiz.reason);
      });
    }
  });

  dashboardInfo.withdrawalsReason = setWithdrawalsReason(withdrawalsReason);

  return dashboardInfo;
};

const setWithdrawalsReason = (
  withdrawalsReason: string[],
): ChartDataProps[] => {
  const unique: string[] = withdrawalsReason.filter(
    (value, index, array) => array.indexOf(value) === index,
  );
  const quantities: number[] = [];

  withdrawalsReason.forEach(item => {
    quantities[unique.indexOf(item)] = quantities[unique.indexOf(item)]
      ? quantities[unique.indexOf(item)] + 1
      : 1;
  });
  return unique
    .map((item, index) => {
      return {
        label: item,
        quantity: quantities[index],
      };
    })
    .sort((a, b) => b.quantity - a.quantity);
};

const getDestinations = (bikeArray: Bike[]): ChartDataProps[] => {
  const allDestinations: string[] = [];
  bikeArray.forEach(bike => {
    bike.devolutions?.forEach(devolution => {
      allDestinations.push(devolution.quiz.destination);
    });
  });
  return groupBy(allDestinations);
};

// TODO - refactor this function
const groupBy = (allItems: string[]): ChartDataProps[] => {
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
  return chartDataProps;
};

const setWithdrawalsPerCommunities = (
  bikesPerCommunities: BikesPerCommunities[],
): ChartDataProps[] => {
  let array: ChartDataProps[] = [];
  array = bikesPerCommunities.map(item => {
    let quantity = 0;

    item.bikes.forEach(bike => {
      if (bike.withdraws) {
        quantity += bike.withdraws.length;
      }
    });

    return {
      label: item.label,
      quantity,
    };
  });
  return array.filter(item => item.quantity > 0);
};

const getBikesInUseQuantity = (bikeArray: Bike[]): number => {
  return bikeArray.filter(bike => bike.inUse).length;
};

const getNewUsers = (users: User[]): number => {
  return users.filter(user => user.userQuiz?.alreadyUseBPR).length;
};

const getWomenUsers = (users: User[]): number => {
  return users.filter(user => user.gender === GenderTypes.female).length;
};

const getTravelsWithRideGiven = (bikes: Bike[]): number => {
  return bikes.filter(bike =>
    bike.devolutions?.filter(devolution => devolution.quiz?.giveRide),
  ).length;
};

export default DashboardService;
