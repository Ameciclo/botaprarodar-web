import { act, waitFor } from '@testing-library/react';
import api from 'shared/services/api';
import Community from '../models/Community';
import {
  MockedFirstCommunity,
  MockedSecondCommunity,
} from '../mocks/MockedCommunity';
import CommunityService from './CommunityService';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedCommunities = [MockedFirstCommunity, MockedSecondCommunity];

const mockedApiCommunitiesResponse = {
  data: {
    '-MLDOXs3p35DEHg0gdUU': MockedFirstCommunity,
    '-MLy8y1-5v5GLg7Z428y': MockedSecondCommunity,
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
        '-MLDOXs3p35DEHg0gdUU': MockedFirstCommunity,
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
        '-MLDOXs3p35DEHg0gdUU': MockedFirstCommunity,
      }),
    );
  });

  it('should update community by ID', async () => {
    mockedApi.put.mockResolvedValue({
      data: {
        '-MLDOXs3p35DEHg0gdUU': MockedSecondCommunity,
      },
    });
    let data: Community[];

    await act(async () => {
      data = await CommunityService.editCommunityById(
        'MLDOXs3p35DEHg0gdUU',
        MockedSecondCommunity,
      );
    });

    expect(mockedApi.put).toHaveBeenCalledWith(
      '/communities/MLDOXs3p35DEHg0gdUU.json',
      MockedSecondCommunity,
    );
    await waitFor(() =>
      expect(data).toStrictEqual({
        '-MLDOXs3p35DEHg0gdUU': MockedSecondCommunity,
      }),
    );
  });

  it('should delete a community by ID', async () => {
    mockedApi.put.mockResolvedValue({ data: {} });
    let data: Community;
    await act(async () => {
      data = await CommunityService.deleteCommunityById('-MLDOXs3p35DEHg0gdUU');
    });
    expect(mockedApi.put).toHaveBeenCalledWith(
      '/communities/-MLDOXs3p35DEHg0gdUU.json',
      {},
    );
    await waitFor(() => expect(data).toStrictEqual({}));
  });
});
