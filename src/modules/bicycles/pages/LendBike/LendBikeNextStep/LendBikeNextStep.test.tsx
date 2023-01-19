import {
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { mockedBike } from 'modules/bicycles/mocks/BikeMocks';
import BikeService from 'modules/bicycles/services/BikeService';
import { mockedUser } from 'modules/users/mocks/MockedUser';
import { renderWithRouterAndAuth } from 'setupTests';
import LendBikeNextStep from './LendBikeNextStep';

jest.mock('../../../services/BikeService');
const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;

describe('LendBikeNextStep', () => {
  let communityId;
  let selectedUser;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
      selectedUser = mockedUser();
    });

    it('should render correctly', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([mockedBike()]);
      const { history } = renderWithRouterAndAuth(<LendBikeNextStep />, {
        route: '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
        stateParams: { communityId, selectedUser },
      });

      const { location } = history;

      await waitForElementToBeRemoved(() =>
        screen.getByText('Carregando, por favor aguarde...'),
      );

      const title = screen.getByRole('heading', { name: 'Voltar' });

      expect(location.pathname).toEqual(
        '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
      );
      expect(location.state).toEqual({
        communityId: 'my-community-id',
        selectedUser: mockedUser(),
      });

      expect(title).toBeInTheDocument();
      expect(screen.getByText('Emprestar bicicleta')).toBeInTheDocument();
      expect(screen.getByText('Selecione a bicicleta')).toBeInTheDocument();
      expect(screen.getByTestId('bikeList')).toBeInTheDocument();
    });

    it('should redirect to select user page when clicking back', async () => {
      mockedBikeService.getBikesPerCommunity.mockResolvedValue([mockedBike()]);
      const { history } = renderWithRouterAndAuth(<LendBikeNextStep />, {
        route: '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
        stateParams: { communityId, selectedUser },
      });

      await waitForElementToBeRemoved(() =>
        screen.getByText('Carregando, por favor aguarde...'),
      );

      const title = screen.getByText('Voltar');

      fireEvent.click(title);

      await waitFor(() => {
        expect(history.location.pathname).toBe(
          '/comunidades/emprestar-bicicleta',
        );
      });
    });
  });

  describe('when does not have state params', () => {
    mockedBikeService.getBikesPerCommunity.mockResolvedValue([]);
    it('should show empty state when having no parameters', async () => {
      renderWithRouterAndAuth(<LendBikeNextStep />, {
        route: '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
      });
      const loadingText = screen.getByText('Página não encontrada');
      expect(loadingText).toBeInTheDocument();
      expect(screen.queryByTestId('bikeList')).not.toBeInTheDocument();
    });
  });
});
