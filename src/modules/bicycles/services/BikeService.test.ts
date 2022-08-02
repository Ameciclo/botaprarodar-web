import { act, waitFor } from '@testing-library/react';
import BikeService from './BikeService';
import api from '../../../shared/services/api';
import {
  MockedBikeOfXPTOCommunity,
  MockedBikeOfTestCommunity,
} from '../mocks/BikeMocks';
import Bike from '../models/Bike';
import {
  MockedFirstCommunity,
  MockedSecondCommunity,
} from 'modules/communities/mocks/MockedCommunity';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedApiBikesResponse = {
  data: {
    '-MgfYTcrUFsX_NXhhvL2': MockedBikeOfXPTOCommunity,
    '-MLy8y1-5v5GLg7Z428y': MockedBikeOfTestCommunity,
  },
};
const mockedBikes = [MockedBikeOfXPTOCommunity, MockedBikeOfTestCommunity];

describe('Bike Service', () => {
  it('should get all bikes', async () => {
    mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
    let data: Bike[];

    await act(async () => {
      data = await BikeService.getAllBikes();
    });

    expect(mockedApi.get).toHaveBeenCalledWith('/bikes.json');
    await waitFor(() => expect(data).toStrictEqual(mockedBikes));
  });

  it.skip('should get all bikes of Comunidade XPTO', async () => {
    mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
    let amount: number;

    await act(async () => {
      amount = await BikeService.getAmountFilteredBikesPerCommunity(
        MockedFirstCommunity.id,
      );
    });

    const filteredMockedBikesPerCommunity = mockedBikes.filter(bike => {
      if (bike.communityId === MockedFirstCommunity.id) {
        return bike;
      }
    });

    await waitFor(() =>
      expect(amount).toEqual(filteredMockedBikesPerCommunity.length),
    );
  });
});
