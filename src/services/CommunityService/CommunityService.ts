import Community from 'models/Community/Community';
import api from 'services/api';

const CommunityService = {
  async getAllCommunities() {
    const { data } = await api.get('/communities.json');

    const communities: Community[] = Object.keys(data).map(id => {
      return { id, ...data[id] };
    });
    return communities;
  },
};

export default CommunityService;
