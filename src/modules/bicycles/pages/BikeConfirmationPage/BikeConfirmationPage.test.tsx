import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndAuth } from 'setupTests';
import { MockedFirstUser } from 'modules/users/mocks/MockedUser';
import { mockedBike } from 'modules/bicycles/mocks/BikeMocks';
import BikeService from 'modules/bicycles/services/BikeService';
import BikeConfirmationPage from './BikeConfirmationPage';

const mockUser = MockedFirstUser;
const bikeMock = mockedBike();
let communityId;
let selectedBike;
let selectedUser;
let historyRender;

jest.mock('modules/bicycles/services/BikeService');
const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;

describe('Render Bike Confirmation Page', () => {
  describe('without props', () => {
    renderWithRouterAndAuth(<BikeConfirmationPage />);
    it('should render bike card and bike user card', async () => {
      const bikeCard = screen.getByTestId('bike-card');
      expect(bikeCard).toBeInTheDocument();

      const bikeUserCard = screen.getByTestId('bike-user-card');
      expect(bikeUserCard).toBeInTheDocument();
    });
  });

  describe('with props', () => {
    beforeEach(() => {
      selectedBike = bikeMock;
      communityId = bikeMock.communityId;
      selectedUser = mockUser;
      const { history } = renderWithRouterAndAuth(<BikeConfirmationPage />, {
        route: '/comunidades/emprestar-bicicleta/confirmacao',
        stateParams: {
          selectedBike,
          communityId,
          selectedUser,
          formValues: undefined,
        },
      });
      historyRender = history;
    });
    it('should render bike card and bike user card with props for withdraw', async () => {
      const { location } = historyRender;

      expect(location.pathname).toEqual(
        '/comunidades/emprestar-bicicleta/confirmacao',
      );
      expect(location.state).toEqual({
        communityId,
        selectedBike,
        selectedUser,
      });

      await waitFor(() => {
        const bikeUserCard = screen.getByTestId('bike-user-card');
        expect(bikeUserCard).toBeInTheDocument();
        expect(screen.getByText(mockUser.name)).toBeInTheDocument();
        expect(screen.getByText(mockUser.telephone)).toBeInTheDocument();
        const bikeCard = screen.getByTestId('bike-card');
        expect(bikeCard).toBeInTheDocument();

        expect(
          screen.getByText(`ORDEM: ${bikeMock.orderNumber}`),
        ).toBeInTheDocument();
        expect(screen.getByText(bikeMock.name)).toBeInTheDocument();
        expect(
          screen.getByText(`SÉRIE: ${bikeMock.serialNumber}`),
        ).toBeInTheDocument();
      });
    });

    it('should go to next page for withdraw', async () => {
      mockedBikeService.lendBike.mockResolvedValue(selectedBike);

      userEvent.click(screen.getByTestId('submit-button'));

      await waitFor(() => {
        expect(historyRender.location.pathname).toEqual(
          '/comunidades/bicicleta/final',
        );
      });
    });
  });
});
