import { BrowserRouter } from 'react-router-dom';
import {
  act,
  render,
  screen,
} from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeService from '../../../../bicycles/services/BikeService';
import { mockedBike } from '../../../../bicycles/mocks/BikeMocks';
import SelectBikePage from './SelectBikePage';

jest.mock('../../../../bicycles/services/BikeService');
const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;

describe('SelectBikePage', () => {
  let communityId;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = '-MLDOXs3p35DEHg0gdUU';
    });
    it('should render correctly', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([mockedBike()]);
      await act(() => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <SelectBikePage communityId="-MLDOXs3p35DEHg0gdUU" />
          </BrowserRouter>,
        );
      });
      const card = screen.getByTestId('select-bike-page');
      expect(card).toBeInTheDocument();
    });

    it('should render list of bikes', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([mockedBike()]);

      await act(async () => {
        render(
          <BrowserRouter>
            <SelectBikePage communityId="-MLDOXs3p35DEHg0gdUU" />
          </BrowserRouter>,
        );
      });
      expect(screen.getByTestId('bikeList')).toBeInTheDocument();
    });
  });
});
