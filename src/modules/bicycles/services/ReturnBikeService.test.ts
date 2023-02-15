import api from '../../../shared/services/api';
import Neighborhoods from '../models/Neighborhoods';
import ReturnBikeService from './ReturnBikeService';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockData: any = {
  data: {
    '0': {
      id: 0,
      name: 'Afogados',
    },
    '1': {
      id: 1,
      name: 'Casa Amarela',
    },
    '2': {
      id: 2,
      name: 'Casa Forte',
    },
    '3': {
      id: 3,
      name: 'Cordeiro',
    },
    '4': {
      id: 4,
      name: 'Madalena',
    },
    '5': {
      id: 5,
      name: 'Torre',
    },
  },
};

describe('ReturnBikeService', () => {
  it('should returns all Neigborhoods correctly when getAllNeighborhoods is called', async () => {
    mockedApi.get.mockReturnValue(mockData);

    await ReturnBikeService.getAllNeighborhoods();

    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('/neighborhoods.json');
  });

  it('should returns all Neigborhoods with correctly structure when getAllNeighborhoods is called', async () => {
    const expectedFormatNeighborhoods: Neighborhoods[] = [
      {
        id: 0,
        name: 'Afogados',
      },
      {
        id: 1,
        name: 'Casa Amarela',
      },
      {
        id: 2,
        name: 'Casa Forte',
      },
      {
        id: 3,
        name: 'Cordeiro',
      },
      {
        id: 4,
        name: 'Madalena',
      },
      {
        id: 5,
        name: 'Torre',
      },
    ];
    mockedApi.get.mockReturnValue(mockData);

    const allNeighborhoods = await ReturnBikeService.getAllNeighborhoods();

    expect(allNeighborhoods).toStrictEqual(expectedFormatNeighborhoods);
  });
});
