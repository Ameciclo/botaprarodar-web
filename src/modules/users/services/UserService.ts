import api from 'shared/services/api';
import User from '../models/User';

const UserService = {
  async getAllUsers() {
    const { data } = await api.get('/users.json');

    const users: User[] = Object.keys(data).map(id => {
      return { id, ...data[id] };
    });

    return users;
  },

  async getUserById(id: string) {
    const { data } = await api.get(`/users/${id}.json`);

    return data;
  },
};

export default UserService;
