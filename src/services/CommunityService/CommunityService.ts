import Community from '../../models/Community/Community';
import { database } from '../firebase';

const CommunityService = {
  getAllCommunities() {
    const communitiesRef = database.ref('communities');
    communitiesRef.once('value', snapshot => {
      const data: any[] = Object.keys(snapshot.val()).map(id => {
        return { id, ...snapshot.val()[id] };
      });
      return data;
    });
  },
};

export default CommunityService;
