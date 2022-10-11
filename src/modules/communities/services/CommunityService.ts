import Community from 'modules/communities/models/Community';
import DashboardService from 'modules/dashboard/services/DashboardService';
import api from 'shared/services/api';

const CommunityService = {
  async getAllCommunities(): Promise<Community[]> {
    const { data } = await api.get('/communities.json');

    return Object.keys(data).map(id => {
      return { id, ...data[id] };
    });
  },
  async getCommunityById(id: string): Promise<Community> {
    const { data } = await api.get(`/communities/${id}.json`);
    return data;
  },

  async createCommunity(body: any) {
    const { data } = await api.put(`/communities/${body.id}.json`, body);
    await DashboardService.updateCommunityDashboardInfo('insert');
    return data;
  },

  async editCommunityById(id: string, body: any) {
    const { data } = await api.put(`/communities/${id}.json`, body);
    await DashboardService.updateCommunityDashboardInfo('update');
    return data;
  },

  async deleteCommunityById(id: string) {
    const { data } = await api.put(`/communities/${id}.json`, {});
    await DashboardService.updateCommunityDashboardInfo('delete');
    return data;
  },
};

export default CommunityService;
