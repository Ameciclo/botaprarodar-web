import api from 'shared/services/api';

const DashboardService = {
  async dashboardInfo() {
    const { data } = await api.get('/dashboardInfo.json');

    return data;
  },
};
export default DashboardService;
