import { v4 as uuidv4 } from 'uuid';
import api from 'shared/services/api';
import DashboardService from 'modules/dashboard/services/DashboardService';
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

  async getUserById(id: string | undefined) {
    if (id) {
      const { data } = await api.get(`/users/${id}.json`);

      return data;
    }
    return {};
  },

  async getUsersByCommunity(communityId: string) {
    const { data } = await api.get('/users.json');

    const dataArray = Object.keys(data).map(key => {
      return data[key];
    });

    const users: User[] = communityId
      ? dataArray.filter(d => d?.communityId === communityId)
      : dataArray;

    return users;
  },

  async createUser(body: any) {
    const payload = {
      name: body.name.trim(),
      createDate: new Date(),
      address: body.address.trim(),
      gender: body.gender,
      profilePicture: '',
      age: body.age,
      racial: body.race,
      schooling: body.schooling,
      schoolingStatus: body.schoolingStatus,
      income: body.income,
      communityId: body.communityId,
      telephone: body.phone,
      id: uuidv4(),
      isBlocked: false,
      userQuiz: {
        alreadyUseBPR: body.alreadyUseBPR,
        motivation: Number(body.motivation),
        motivationOpenQuestion: body.motivationOpenQuestion,
        alreadyAccidentVictim: body.collision,
        problemsOnWayOpenQuestion: body.problems.trim(),
        timeOnWayOpenQuestion: body.timeToArrive,
      },
    };

    const { data } = await api.put(`/users/${payload.id}.json`, payload);
    if (data) {
      await DashboardService.updateUserDashboardInfo(data);
    }
    return data;
  },

  async setUserBlock(id: string, isBlocked: boolean) {
    const { data } = await api.patch(`/users/${id}.json`, { isBlocked });

    return data;
  },
};

export default UserService;
