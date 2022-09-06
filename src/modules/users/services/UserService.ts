import { v4 as uuidv4 } from 'uuid';
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

  async isUserAdmin(userId: string) {
    try {
      const { data } = await api.get(`/admins/${userId}.json`);
      return Object.keys(data).length > 0;
    } catch (error) {
      return false;
    }
  },

  async getUserById(id: string) {
    const { data } = await api.get(`/users/${id}.json`);

    return data;
  },

  async createUser(body: any) {
    const payload = {
      name: body.name,
      createDate: new Date(),
      address: body.address,
      gender: body.gender,
      profilePicture: '',
      age: body.age,
      racial: body.racial,
      schooling: body.schooling,
      schoolingStatus: body.schoolingStatus,
      income: body.income,
      communityId: body.communityId,
      telephone: body.telephone,
      id: uuidv4(),
      isBlocked: false,
      userQuiz: {
        alreadyUseBPR: body.alreadyUseBPR,
        alreadyUseBPROpenQuestion: body.alreadyUseBPROpenQuestion,
        motivationOpenQuestion: body.reason,
        alreadyAccidentVictim: body.collision,
        problemsOnWayOpenQuestion: body.problems,
        timeOnWayOpenQuestion: body.timeToArrive,
      },
    };

    const { data } = await api.put(`/users/${payload.id}.json`, payload);
    return data;
  },

  async setUserBlock(id: string, isBlocked: boolean) {
    const { data } = await api.patch(`/users/${id}.json`, { isBlocked });

    return data;
  },
};

export default UserService;
