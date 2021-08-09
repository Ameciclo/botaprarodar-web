import Bikes from '../../models/Bikes/Bikes';
import Community from '../../models/Community/Community';
import DashboardInfo from '../../models/DashboardInfo/DashboardInfo';
import { database } from '../firebase';

const DashboardInfoInitialValues: DashboardInfo = {
  communitiesQuantity: 0,
  bikesQuantity: 0,
  bikesPerCommunities: [],
  withdrawalsPerCommunities: [],
};

const DashboardService = {
  async dashboardInfo() {
    const dashboardInfo: DashboardInfo = DashboardInfoInitialValues;

    const dbRef = database.ref();
    const communitiesRef = dbRef.child('communities');
    const bikesRef = dbRef.child('bikes');

    const communitiesData: Community[] = await communitiesRef
      .once('value')
      .then(snapshot => {
        const data: Community[] = Object.keys(snapshot.val()).map(id => {
          return { id, ...snapshot.val()[id] };
        });
        return data;
      })
      .catch(err => err);

    const bikesData = await bikesRef.once('value').then(snapshot => {
      const data: Bikes[] = Object.keys(snapshot.val()).map(id => {
        return { id, ...snapshot.val()[id] };
      });
      return data;
    });

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

    return dashboardInfo;
  },
};

export default DashboardService;
