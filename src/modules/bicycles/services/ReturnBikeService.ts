import api from '../../../shared/services/api';
import Neighborhoods from '../models/Neighborhoods';

const ReturnBikeService = {
  async getAllNeighborhoods() {
    const { data } = await api.get('/neighborhoods.json');

    const neighborhoods: Neighborhoods[] = Object.keys(data).map(id => {
      return { id: data[id].id, name: data[id].name };
    });

    return neighborhoods;
  },
};

export default ReturnBikeService;
