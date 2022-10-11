import api from 'shared/services/api';
import DashboardTranslate from '../utils/DashboardTranslate';

const DashboardService = {
  async dashboardInfo() {
    const { data } = await api.get('/dashboardInfo.json');

    return data;
  },

  async updateUserDashboardInfo(newUserData) {
    const currentDashBoardInfo = await this.dashboardInfo();

    currentDashBoardInfo.gender = currentDashBoardInfo.gender.map(gender =>
      gender.label === newUserData.gender
        ? { label: gender.label, quantity: gender.quantity + 1 }
        : { label: gender.label, quantity: gender.quantity },
    );

    currentDashBoardInfo.racialInfo = currentDashBoardInfo.racialInfo.map(
      racialInfo =>
        racialInfo.label === newUserData.racial
          ? { label: racialInfo.label, quantity: racialInfo.quantity + 1 }
          : { label: racialInfo.label, quantity: racialInfo.quantity },
    );

    currentDashBoardInfo.income = currentDashBoardInfo.income.map(income =>
      income.label === DashboardTranslate.translateIncome(newUserData.income)
        ? { label: income.label, quantity: income.quantity + 1 }
        : { label: income.label, quantity: income.quantity },
    );

    currentDashBoardInfo.age = currentDashBoardInfo.age.map(age =>
      age.label === DashboardTranslate.translateAge(newUserData.age)
        ? { label: age.label, quantity: age.quantity + 1 }
        : { label: age.label, quantity: age.quantity },
    );

    currentDashBoardInfo.schooling = currentDashBoardInfo.schooling.map(
      schooling =>
        schooling.label ===
        DashboardTranslate.translateSchooling(
          newUserData.schooling,
          newUserData.schoolingStatus,
        )
          ? { label: schooling.label, quantity: schooling.quantity + 1 }
          : { label: schooling.label, quantity: schooling.quantity },
    );

    const timeOnWay = newUserData.userQuiz.timeOnWayOpenQuestion.replace(
      ':',
      '.',
    );
    currentDashBoardInfo.travelTimeInMinutes.push(Number(timeOnWay));
    currentDashBoardInfo.newUsers += 1;
    currentDashBoardInfo.usersQuantity += 1;
    currentDashBoardInfo.womenUsers +=
      newUserData.gender === 'Feminino' ? 1 : 0;
    currentDashBoardInfo.lastUpdate = new Date().toISOString();

    const { data } = await api.put('/dashboardInfo.json', currentDashBoardInfo);

    return data;
  },

  async updateCommunityDashboardInfo(option: string) {
    if (option === 'update') {
      return null;
    }

    const currentDashBoardInfo = await this.dashboardInfo();

    if (option === 'insert') {
      currentDashBoardInfo.communitiesQuantity += 1;
    }
    if (option === 'delete') {
      currentDashBoardInfo.communitiesQuantity -= 1;
    }

    currentDashBoardInfo.lastUpdate = new Date().toISOString();
    const { data } = await api.put('/dashboardInfo.json', currentDashBoardInfo);

    return data;
  },

  async updateBikeUse(type: string, bikeQuiz?: any) {
    const currentDashBoardInfo = await this.dashboardInfo();

    if (type === 'lend') {
      currentDashBoardInfo.bikesInUse += 1;
    } else if (type === 'return') {
      if (
        currentDashBoardInfo.destination.filter(
          destination => destination.label === bikeQuiz.destination,
        ).length > 0
      ) {
        currentDashBoardInfo.destination = currentDashBoardInfo.destination.map(
          destination =>
            destination.label === bikeQuiz.destination
              ? { label: destination.label, quantity: destination.quantity + 1 }
              : { label: destination.label, quantity: destination.quantity },
        );
      } else {
        currentDashBoardInfo.destination.push({
          label: bikeQuiz.destination,
          quantity: 1,
        });
      }

      currentDashBoardInfo.withdrawalsReason =
        currentDashBoardInfo.withdrawalsReason.map(withdrawalsReason =>
          withdrawalsReason.label ===
          DashboardTranslate.translateWithdrawalsReason(bikeQuiz.reason)
            ? {
                label: withdrawalsReason.label,
                quantity: withdrawalsReason.quantity + 1,
              }
            : {
                label: withdrawalsReason.label,
                quantity: withdrawalsReason.quantity,
              },
        );

      currentDashBoardInfo.travelsWithRideGiven +=
        bikeQuiz.giveRide === 'Sim' ? 1 : 0;

      currentDashBoardInfo.incidentsHappened +=
        bikeQuiz.problemsDuringRide === 'Sim' ? 1 : 0;

      currentDashBoardInfo.travelsDone += 1;
      currentDashBoardInfo.bikesInUse -= 1;
    }

    currentDashBoardInfo.lastUpdate = new Date().toISOString();
    const { data } = await api.put('/dashboardInfo.json', currentDashBoardInfo);

    return data;
  },
};
export default DashboardService;
