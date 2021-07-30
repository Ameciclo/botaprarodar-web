import api from '../api';

const UserService = {
  getUsers() {
    return api.get('/users.json');
  },
};

export default UserService;
