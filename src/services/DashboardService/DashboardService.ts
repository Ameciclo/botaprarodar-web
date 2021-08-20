import BikeService from 'services/BikeService/BikeService';
import CommunityService from 'services/CommunityService/CommunityService';
import Bike from '../../models/Bike/Bike';
import Community from '../../models/Community/Community';
import DashboardInfo from '../../models/DashboardInfo/DashboardInfo';

const DashboardInfoInitialValues: DashboardInfo = {
  communitiesQuantity: 0,
  bikesQuantity: 0,
  bikesPerCommunities: [],
  withdrawalsPerCommunities: [],
  travelsDone: 0,
  incidentsHappened: 0,
  withdrawalsReason: [],
};

const DashboardService = {
  async dashboardInfo() {
    const communitiesData: Community[] =
      await CommunityService.getAllCommunities();

    const bikesData: Bike[] = await BikeService.getAllBikes();

    return mapResultToData(communitiesData, bikesData);
  },
};

const mapResultToData = (
  communitiesData: Community[],
  bikesData: Bike[],
): DashboardInfo => {
  const dashboardInfo: DashboardInfo = DashboardInfoInitialValues;

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

  bikesData.forEach(bike => {
    if (bike.devolutions && bike.devolutions.length > 0) {
      dashboardInfo.travelsDone += bike.devolutions.length;
      bike.devolutions.forEach(devolution => {
        dashboardInfo.incidentsHappened +=
          devolution.quiz.problemsDuringRiding === 'Sim' ? 1 : 0;
        dashboardInfo.withdrawalsReason.push(devolution.quiz.reason);
      });
    }
  });

  return dashboardInfo;
};

export default DashboardService;
