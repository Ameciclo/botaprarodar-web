import firebase from 'firebase';
import Bikes from '../../models/Bikes/Bikes';
import Community from '../../models/Community/Community';
import DashboardInfo from '../../models/DashboardInfo/DashboardInfo';
import { database } from '../firebase';

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
    const dbRef = database.ref();
    const communitiesRef = dbRef.child('communities');
    const bikesRef = dbRef.child('bikes');

    const communitiesData: Community[] = await communitiesRef
      .once('value')
      .then(snapshot => mapCommunitiesData(snapshot))
      .catch(err => err);

    const bikesData: Bikes[] = await bikesRef
      .once('value')
      .then(snapshot => mapBikesData(snapshot))
      .catch(err => err);

    return mapResultToData(communitiesData, bikesData);
  },
};

const mapCommunitiesData = (
  snapshot: firebase.database.DataSnapshot,
): Community[] => {
  const data: Community[] = Object.keys(snapshot.val()).map(id => {
    return { id, ...snapshot.val()[id] };
  });
  return data;
};
const mapBikesData = (snapshot: firebase.database.DataSnapshot): Bikes[] => {
  const data: Bikes[] = Object.keys(snapshot.val()).map(id => {
    const snapshotData = snapshot.val()[id];
    if (snapshotData.devolutions) {
      const devolutions = Object.keys(snapshotData.devolutions).map(
        devolutionId => ({
          id: devolutionId,
          ...snapshotData.devolutions[devolutionId],
        }),
      );
      snapshotData.devolutions = devolutions;
    }

    if (snapshotData.withdraws) {
      const withdraws = Object.keys(snapshotData.withdraws).map(withdrawId => ({
        id: withdrawId,
        ...snapshotData.withdraws[withdrawId],
      }));
      snapshotData.withdraws = withdraws;
    }

    return { id, ...snapshotData };
  });
  return data;
};

const mapResultToData = (
  communitiesData: Community[],
  bikesData: Bikes[],
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
