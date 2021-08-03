import Community from '../../models/Community/Community';
import { database } from '../firebase';

const CommunityService = {
  async getAllCommunities() {
    const communitiesRef = database.ref('communities');
    return communitiesRef
      .once('value')
      .then(snapshot => {
        const data: Community[] = Object.keys(snapshot.val()).map(id => {
          return { id, ...snapshot.val()[id] };
        });
        return data;
      })
      .catch(err => err);
  },
};

export default CommunityService;
