import { BrowserRouter } from 'react-router-dom';
import { act, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeService from '../../services/BikeService';
import { mockedBike } from '../../mocks/BikeMocks';
import SelectBikePage from './SelectBikePage';

jest.mock('../../services/BikeService');
const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;

describe('SelectBikePage', () => {
  describe('when has state params', () => {
    it('should render correctly', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([mockedBike()]);
      renderWithRouterAndAuth(
        <BrowserRouter>
          <SelectBikePage communityId="-MLDOXs3p35DEHg0gdUU" />
        </BrowserRouter>,
      );

      await waitForElementToBeRemoved(() =>
        screen.getByText('Carregando, por favor aguarde...'),
      );

      const card = screen.getByTestId('select-bike-page');
      expect(card).toBeInTheDocument();
    });

    it('should render list of bikes when returned by endpoint', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([mockedBike()]);

      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <SelectBikePage communityId="-MLDOXs3p35DEHg0gdUU" />
          </BrowserRouter>,
        );
      });
      expect(screen.getByTestId('bikeList')).toBeInTheDocument();
      expect(screen.getByText('Selecione a bicicleta')).toBeInTheDocument();
    });

    it('should render no bikes found message', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([]);

      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <SelectBikePage communityId="-MLDOXs3p35DEHg0gdUU" />
          </BrowserRouter>,
        );
      });
      expect(
        screen.queryByText('Selecione a bicicleta'),
      ).not.toBeInTheDocument();
      expect(
        screen.getByText('Nenhuma bicicleta disponível!'),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Verifique as bicicletas cadastradas e tente novamente.',
        ),
      ).toBeInTheDocument();
    });
  });
});
