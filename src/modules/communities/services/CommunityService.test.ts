import api from 'shared/services/api';
import { act, waitFor } from '@testing-library/react';
import CommunityService from './CommunityService';
import Community from '../models/Community';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedCommunities = [
  {
    address: 'Recife',
    created_date: 1604411814596,
    description: 'Comunidade em Recife',
    id: '-MLDOXs3p35DEHg0gdUU',
    name: 'Comunidade x',
    org_email: 'joao@joao.com',
    org_name: 'Joao',
  },
];
const mockedApiCommunitiesResponse = {
  data: {
    '-MLDOXs3p35DEHg0gdUU': {
      address: 'Recife',
      created_date: 1604411814596,
      description: 'Comunidade em Recife',
      id: '-MLDOXs3p35DEHg0gdUU',
      name: 'Comunidade x',
      org_email: 'joao@joao.com',
      org_name: 'Joao',
    },
  },
};

it('should call api to retrieve communities', async () => {
  mockedApi.get.mockResolvedValue(mockedApiCommunitiesResponse);
  let data: Community[];
  await act(async () => {
    data = await CommunityService.getAllCommunities();
  });
  expect(mockedApi.get).toHaveBeenCalledWith('/communities.json');
  await waitFor(() => expect(data).toStrictEqual(mockedCommunities));
});
