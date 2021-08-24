import Community from 'models/Community/Community';
import api from 'services/api';

const CommunityService = {
  async getAllCommunities(): Promise<Community[]> {
    const { data } = await api.get('/communities.json');

    return Object.keys(data).map(id => {
      return { id, ...data[id] };
    });
  },
  async getCommunityById(id: string) {
    const { data } = await api.get(`/communuties/${id}.json`);

    return data;
  },
};

export default CommunityService;
