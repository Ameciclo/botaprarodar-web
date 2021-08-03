import User from '../../models/Users/User';
import { database } from '../firebase';

const UserService = {
  async getAllUsers() {
    const usersRef = database.ref('users');
    return usersRef
      .once('value')
      .then(snapshot => {
        const data: User[] = Object.keys(snapshot.val()).map(id => {
          return { id, ...snapshot.val()[id] };
        });
        return data;
      })
      .catch(err => err);
  },
};

export default UserService;
