import Community from 'modules/communities/models/Community';
import api from 'shared/services/api';

const CommunityService = {
  async getAllCommunities(): Promise<Community[]> {
    const { data } = await api.get('/communities.json');

    return Object.keys(data).map(id => {
      return { id, ...data[id] };
    });
  },
  async getCommunityById(id: string) {
    const { data } = await api.get(`/communities/${id}.json`);
    return data;
  },

  async editCommunityById(id: string, body: any) {
    const { data } = await api.put(`/communities/${id}.json`, body);
    return data;
  },
};

export default CommunityService;