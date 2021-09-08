import { act, waitFor } from '@testing-library/react';
import BikeService from './BikeService';
import api from '../../../shared/services/api';
import { MockedBike } from '../mocks/BikeMocks';
import Bike from '../models/Bike';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedApiBikesResponse = {
  data: {
    '-MgfYTcrUFsX_NXhhvL2': MockedBike,
  },
};
const mockedBikes = [MockedBike];

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
});
