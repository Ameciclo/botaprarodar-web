import api from 'shared/services/api';
import { act, waitFor } from '@testing-library/react';
import CommunityService from './CommunityService';
import Community from '../models/Community';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedFirstCommunity = {
  address: 'Recife',
  created_date: 1604411814596,
  description: 'Comunidade em Recife',
  id: '-MLDOXs3p35DEHg0gdUU',
  name: 'Comunidade x',
  org_email: 'joao@joao.com',
  org_name: 'Joao',
};
const mockedSecondCommunity = {
  address: 'Rua Teste, 123',
  created_date: 1605213085525,
  description: 'Descricao teste',
  id: '-MLy8y1-5v5GLg7Z428y',
  name: 'Nome Teste',
  org_email: 'orgtest@orgtest.com',
  org_name: 'Nome Org Teste',
};
const mockedCommunities = [mockedFirstCommunity, mockedSecondCommunity];

const mockedApiCommunitiesResponse = {
  data: {
    '-MLDOXs3p35DEHg0gdUU': mockedFirstCommunity,
    '-MLy8y1-5v5GLg7Z428y': mockedSecondCommunity,
  },
};

describe('Community Service', () => {
  it('should get all communities', async () => {
    mockedApi.get.mockResolvedValue(mockedApiCommunitiesResponse);
    let data: Community[];
    await act(async () => {
      data = await CommunityService.getAllCommunities();
    });
    expect(mockedApi.get).toHaveBeenCalledWith('/communities.json');
    await waitFor(() => expect(data).toStrictEqual(mockedCommunities));
  });

  it('should get community by ID', async () => {
    mockedApi.get.mockResolvedValue({
      data: {
        '-MLDOXs3p35DEHg0gdUU': mockedFirstCommunity,
      },
    });
    let data: Community[];
    await act(async () => {
      data = await CommunityService.getCommunityById('MLDOXs3p35DEHg0gdUU');
    });
    expect(mockedApi.get).toHaveBeenCalledWith(
      '/communities/MLDOXs3p35DEHg0gdUU.json',
    );
    await waitFor(() =>
      expect(data).toStrictEqual({
        '-MLDOXs3p35DEHg0gdUU': mockedFirstCommunity,
      }),
    );
  });
});
