import { act, waitFor } from '@testing-library/react';
import { mockedUser } from 'modules/users/mocks/MockedUser';
import api from '../../../shared/services/api';
import { mockedBike } from '../mocks/BikeMocks';
import Bike from '../models/Bike';
import AmountBikesPerCommunity from '../utils/AmountBikesPerCommunity';
import BikeService from './BikeService';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedApiBikesResponse = {
  data: [mockedBike(), mockedBike(), mockedBike(), mockedBike(), mockedBike()],
};

describe('Bike Service', () => {
  describe('when api works', () => {
    it('should get all bikes', async () => {
      mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
      let data: Bike[];

      await act(async () => {
        data = await BikeService.getAllBikes();
      });

      expect(mockedApi.get).toHaveBeenCalledWith('/bikes.json');
      await waitFor(() =>
        expect(data).toStrictEqual(mockedApiBikesResponse.data),
      );
    });

    describe('getAmountFilteredBikesPerCommunity', () => {
      it('should get all bikes of same community', async () => {
        mockedApiBikesResponse.data = [
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
        ];
        mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
        let amount: AmountBikesPerCommunity;

        await act(async () => {
          amount = await BikeService.getAmountFilteredBikesPerCommunity(
            '-MLDOXs3p35DEHg0gdUU',
          );
        });

        await waitFor(() =>
          expect(amount).toEqual({ total: 5, available: 0, borrowed: 5 }),
        );
      });

      it('should get all bikes in a community without bikes', async () => {
        mockedApiBikesResponse.data = [
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
        ];
        mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
        let amount: AmountBikesPerCommunity;

        await act(async () => {
          amount = await BikeService.getAmountFilteredBikesPerCommunity(
            '-MLDOXs3p35DEHg0gdUU',
          );
        });

        await waitFor(() =>
          expect(amount).toEqual({ total: 0, available: 0, borrowed: 0 }),
        );
      });

      it('should get all bikes in a different communities', async () => {
        mockedApiBikesResponse.data = [
          mockedBike({ inUse: true, communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ inUse: true, communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
          mockedBike({ inUse: true, communityId: '-MLDOXs3p35DEHg0gdUU' }),
        ];
        mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
        let amount: AmountBikesPerCommunity;

        await act(async () => {
          amount = await BikeService.getAmountFilteredBikesPerCommunity(
            '-MLDOXs3p35DEHg0gdUU',
          );
        });

        await waitFor(() =>
          expect(amount).toEqual({ total: 2, available: 0, borrowed: 2 }),
        );
      });

      it('should get all bikes in a different communities with available bikes', async () => {
        mockedApiBikesResponse.data = [
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({
            communityId: '-MLDOXs3p35DEHg0gdUU',
            available: false,
            inUse: true,
          }),
          mockedBike({ communityId: '-MLDOXs3p35DEHg0gdUU' }),
        ];
        mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
        let amount: AmountBikesPerCommunity;

        await act(async () => {
          amount = await BikeService.getAmountFilteredBikesPerCommunity(
            '-MLDOXs3p35DEHg0gdUU',
          );
        });

        await waitFor(() =>
          expect(amount).toEqual({ total: 2, available: 1, borrowed: 1 }),
        );
      });

      it('should return default values when dont have bikes', async () => {
        mockedApiBikesResponse.data = [];
        mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
        let amount: AmountBikesPerCommunity;

        await act(async () => {
          amount = await BikeService.getAmountFilteredBikesPerCommunity(
            '-MLDOXs3p35DEHg0gdUU',
          );
        });

        await waitFor(() =>
          expect(amount).toEqual({ total: 0, available: 0, borrowed: 0 }),
        );
      });
    });

    describe('getBikesPerCommunity', () => {
      it('should get bikes per community', async () => {
        mockedApiBikesResponse.data = [
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
          mockedBike({ communityId: '-MLy8y1-5v5GLg7Z428y' }),
        ];
        mockedApi.get.mockResolvedValue(mockedApiBikesResponse);
        const bikeList = await BikeService.getBikesPerCommunity(
          '-MLy8y1-5v5GLg7Z428y',
          null,
        );
        bikeList?.map(bike => {
          return expect(bike.communityId).toStrictEqual('-MLy8y1-5v5GLg7Z428y');
        });
        expect(bikeList).toHaveLength(3);
      });
    });

    describe('updateBike', () => {
      it('should clear withdraw information when user is not passed', async () => {
        const bike = mockedBike({ inUse: true });

        const expectedBike = { ...bike };
        expectedBike.inUse = false;
        expectedBike.withdrawToUser = '';

        mockedApiBikesResponse.data = [expectedBike];
        mockedApi.put.mockResolvedValue(mockedApiBikesResponse);

        const bikeUpdated = await BikeService.updateBike(bike, undefined);
        expect(bikeUpdated[0].inUse).toEqual(false);
        expect(bikeUpdated[0].withdrawToUser).toEqual('');
      });

      it('should update withdraw information when user is passed', async () => {
        const bike = mockedBike();
        const user = mockedUser();

        const expectedBike = { ...bike };
        expectedBike.inUse = true;
        expectedBike.withdrawToUser = user.id;

        mockedApiBikesResponse.data = [expectedBike];
        mockedApi.put.mockResolvedValue(mockedApiBikesResponse);

        const bikeUpdated = await BikeService.updateBike(bike, user);
        expect(bikeUpdated[0].inUse).toEqual(true);
        expect(bikeUpdated[0].withdrawToUser).toEqual(user.id);
      });
    });
  });

  describe('should return error when api fails', () => {
    it('should return error', async () => {
      const err = new Error('Error de comunicação com a api');
      mockedApi.get.mockRejectedValueOnce(err);

      try {
        await BikeService.getAmountFilteredBikesPerCommunity(
          '-MLDOXs3p35DEHg0gdUU',
        );
      } catch (e) {
        expect(e).toEqual(err);
      }
    });
  });
});
