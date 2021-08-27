import BikeService from 'modules/bicycles/services/BikeService';
import CommunityService from 'modules/communities/services/CommunityService';
import User from 'modules/users/models/User';
import UserService from 'modules/users/services/UserService';
import ChartDataProps from 'shared/models/ChartDataProps';
import Bike from '../../bicycles/models/Bike';
import Community from '../../communities/models/Community';
import DashboardInfo from '../models/DashboardInfo';

const DashboardInfoInitialValues: DashboardInfo = {
  communitiesQuantity: 0,
  bikesQuantity: 0,
  bikesPerCommunities: [],
  withdrawalsPerCommunities: [],
  travelsDone: 0,
  incidentsHappened: 0,
  withdrawalsReason: [],
  bikersCommunities: [],
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

  // eslint-disable-next-line no-console
  console.log(
    '%cMyProject%cline:35%ccommunitiesData',
    'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
    'color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px',
    communitiesData,
  );

  // eslint-disable-next-line no-console
  console.log(
    '%cMyProject%cline:44%cbikesData',
    'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
    'color:#fff;background:rgb(3, 101, 100);padding:3px;border-radius:2px',
    bikesData,
  );

  // eslint-disable-next-line no-console
  console.log(
    '%cMyProject%cline:44%cusersData',
    'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
    'color:#fff;background:rgb(3, 101, 100);padding:3px;border-radius:2px',
    usersData,
  );

  dashboardInfo.communitiesQuantity = communitiesData.length;
  dashboardInfo.bikesQuantity = bikesData.length;
  dashboardInfo.bikesPerCommunities = communitiesData
    .map(community => {
      let quantity = 0;

      if (community.bicycles) {
        quantity = Object.entries(community.bicycles).length;
      }
      return {
        label: community.description,
        quantity,
      };
    })
    .filter(item => item.quantity > 0);

  dashboardInfo.withdrawalsPerCommunities = communitiesData
    .map(community => {
      let quantity = 0;

      if (community.withdrawals) {
        quantity = Object.entries(community.withdrawals).length;
      }
      return {
        label: community.description,
        quantity,
      };
    })
    .filter(item => item.quantity > 0);

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
  return unique.map((item, index) => {
    return {
      label: item,
      quantity: quantities[index],
    };
  });
};

export default DashboardService;
