import { act, waitFor } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { mockedUser } from 'modules/users/mocks/MockedUser';
import api from '../../../shared/services/api';
import { mockedBike } from '../mocks/BikeMocks';
import Bike from '../models/Bike';
import AmountBikesPerCommunity from '../utils/AmountBikesPerCommunity';
import BikeService from './BikeService';

jest.mock('shared/services/api');
const uuid = 'abc1234';
jest.mock('uuid', () => ({ v4: () => uuid }));
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
      describe('should clear withdraw information', () => {
        it('when user is not passed', async () => {
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
      });

      describe('should update withdraw information', () => {
        it('when user is passed', async () => {
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

      describe('should not update withdraw information', () => {
        it('when bike is not available', async () => {
          const bike = mockedBike({ available: false });

          mockedApi.put.mockResolvedValue({});

          const bikeUpdated = await BikeService.updateBike(bike, undefined);
          expect(bikeUpdated).toEqual({});
        });

        it('when user is blocked', async () => {
          const bike = mockedBike();
          const user = mockedUser();
          user.isBlocked = true;

          mockedApi.put.mockResolvedValue({});

          const bikeUpdated = await BikeService.updateBike(bike, user);
          expect(bikeUpdated).toEqual({});
        });
      });
    });

    describe('updateBikeWithdraws', () => {
      describe('should add a new withdraw', () => {
        it('to a bike in use by a user', async () => {
          const user = mockedUser();
          const bike = mockedBike({ inUse: true, userId: user.id });

          const withdraw = {
            date: new Date().toLocaleString('pt-BR'),
            id: uuidv4(),
            user,
          };

          mockedApi.put.mockResolvedValue({ data: withdraw });

          const newBikeWithdraw = await BikeService.updateBikeWithdraws(
            bike,
            user,
          );
          expect(newBikeWithdraw).toEqual(withdraw);
        });
      });

      describe('should not add a new withdraw to a bike', () => {
        const user = mockedUser();
        const blockedUser = { ...user, isBlocked: true };
        const bike = mockedBike({
          inUse: true,
          userId: user.id,
        });
        const bikeNoInUse = { ...bike, inUse: false };
        const bikeNotAvailable = { ...bike, available: false };
        const bikeDifferentWithdrawToUser = { ...bike, withdrawToUser: '0000' };
        mockedApi.put.mockResolvedValue({});

        it.each`
          testTitle                            | testedUser     | testedBike
          ${'not in use'}                      | ${user}        | ${bikeNoInUse}
          ${'not avaiable'}                    | ${user}        | ${bikeNotAvailable}
          ${'with a different withdrawToUser'} | ${user}        | ${bikeDifferentWithdrawToUser}
          ${'if user is blocked'}              | ${blockedUser} | ${bike}
        `('$testTitle', async ({ testedUser, testedBike }) => {
          expect(
            await BikeService.updateBikeWithdraws(testedBike, testedUser),
          ).toEqual({});
        });
      });
    });

    describe('updateBikeDevolutions', () => {
      const bike = mockedBike();
      const user = mockedUser();
      const withdrawId = '123';
      const quiz = {
        destination: 'neighborhood',
        giveRide: 'Não',
        problemsDuringRide: 'Não',
        reason: 'Para realizar entregas de aplicativos.',
      };
      describe('should add a new devolution', () => {
        it('to a bike not in use by a user', async () => {
          const devolution = {
            date: new Date().toLocaleString('pt-BR'),
            id: uuidv4(),
            quiz,
            user,
            withdrawId,
          };

          mockedApi.put.mockResolvedValue({ data: devolution });

          const newBikeDevolution = await BikeService.updateBikeDevolutions(
            bike,
            user,
            withdrawId,
            quiz,
          );
          expect(newBikeDevolution).toEqual(devolution);
        });
      });

      describe('should not add a new devolution to a bike', () => {
        const bikeInUse = {
          ...bike,
          inUse: true,
        };
        const bikeNotAvailable = {
          ...bike,
          available: false,
        };

        it.each`
          testTitle         | testedUser | testedBike
          ${'in use'}       | ${user}    | ${bikeInUse}
          ${'not avaiable'} | ${user}    | ${bikeNotAvailable}
        `('$testTitle', async ({ testedUser, testedBike }) => {
          expect(
            await BikeService.updateBikeDevolutions(
              testedBike,
              testedUser,
              withdrawId,
              quiz,
            ),
          ).toEqual({});
        });
      });
    });

    describe('lendBike', () => {
      describe('should return a borrowed bike when', () => {
        it('valid user and bike are provided', async () => {
          const bike = mockedBike();
          const user = mockedUser();

          const borrowedBike = mockedBike({
            userId: user.id,
            inUse: true,
          });

          const withdraw = {
            date: new Date().toLocaleString('pt-BR'),
            id: uuid,
            user,
          };

          mockedApi.put.mockResolvedValueOnce({
            data: borrowedBike,
          });

          mockedApi.put.mockResolvedValueOnce({
            data: withdraw,
          });

          const returnedBike = await BikeService.lendBike(user, bike);
          expect(returnedBike).toEqual(borrowedBike);
        });
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
