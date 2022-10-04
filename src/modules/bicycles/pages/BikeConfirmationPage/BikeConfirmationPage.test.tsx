import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedBike } from 'modules/bicycles/mocks/BikeMocks';
import { mockedFormValues } from 'modules/bicycles/mocks/FormValuesMock';
import { MockedFirstUser, mockedUser } from 'modules/users/mocks/MockedUser';
import { UserService } from 'modules/users/services';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeConfirmationPage from './BikeConfirmationPage';

jest.mock('../../../users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

describe('BikeConfirmationPage', () => {
  let communityId;
  let selectedBike;
  let selectedUser;
  let formValues;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
      selectedBike = mockedBike();
    });

    it('should render correctly for withdraw', async () => {
      selectedUser = mockedUser();
      const { history } = renderWithRouterAndAuth(<BikeConfirmationPage />, {
        route: '/comunidades/emprestar-bicicleta/confirmacao',
        stateParams: { communityId, selectedBike, selectedUser },
      });

      const { location } = history;

      expect(location.pathname).toEqual(
        '/comunidades/emprestar-bicicleta/confirmacao',
      );
      expect(location.state).toEqual({
        communityId,
        selectedBike,
        selectedUser,
      });

      expect(screen.getByText('Voltar')).toBeInTheDocument();
      expect(screen.getByText('Emprestar bicicleta')).toBeInTheDocument();
      expect(screen.getByText('Confirme o empréstimo')).toBeInTheDocument();
      expect(screen.getByTestId('select-bike-page')).toBeInTheDocument();
      expect(screen.getByTestId('bike-pic')).toBeInTheDocument();
      expect(screen.getByTestId('selected-user')).toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    it('should render correctly for devolution', async () => {
      formValues = mockedFormValues();
      mockedUserService.getUserById.mockResolvedValue(MockedFirstUser);
      const { history } = renderWithRouterAndAuth(<BikeConfirmationPage />, {
        route: '/comunidades/devolver-bicicleta/confirmacao',
        stateParams: { communityId, selectedBike, formValues },
      });

      const { location } = history;

      expect(location.pathname).toEqual(
        '/comunidades/devolver-bicicleta/confirmacao',
      );
      expect(location.state).toEqual({
        communityId,
        selectedBike,
        formValues,
      });

      await waitFor(() => {
        expect(screen.getByText('Voltar')).toBeInTheDocument();
        expect(screen.getByText('Devolver bicicleta')).toBeInTheDocument();
        expect(screen.getByText('Confirme a devolução')).toBeInTheDocument();
        expect(screen.getByTestId('select-bike-page')).toBeInTheDocument();
        expect(screen.getByTestId('bike-pic')).toBeInTheDocument();
        expect(screen.getByTestId('selected-user')).toBeInTheDocument();
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
      });
    });

    it('should return to select bike when going back during withdraw', async () => {
      selectedUser = mockedUser();
      const { history } = renderWithRouterAndAuth(<BikeConfirmationPage />, {
        route: '/comunidades/emprestar-bicicleta/confirmacao',
        stateParams: { communityId, selectedBike, selectedUser },
      });

      userEvent.click(screen.getByText('Voltar'));

      await waitFor(() =>
        expect(history.location.pathname).toBe(
          '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
        ),
      );
    });

    it('should return to user quiz when going back during devolution', async () => {
      formValues = mockedFormValues();
      mockedUserService.getUserById.mockResolvedValue(MockedFirstUser);
      const { history } = renderWithRouterAndAuth(<BikeConfirmationPage />, {
        route: '/comunidades/devolver-bicicleta/confirmacao',
        stateParams: { communityId, selectedBike, formValues },
      });

      userEvent.click(screen.getByText('Voltar'));

      await waitFor(() =>
        expect(history.location.pathname).toBe(
          '/comunidades/devolver-bicicleta/questionario',
        ),
      );
    });

    describe('when does not have state params', () => {
      it('should show empty state when having no parameters for withdraw', async () => {
        renderWithRouterAndAuth(<BikeConfirmationPage />, {
          route: '/comunidades/emprestar-bicicleta/confirmacao',
        });
        const loadingText = screen.getByText('Página não encontrada');
        expect(loadingText).toBeInTheDocument();
      });

      it('should show empty state when having no parameters for devolution', async () => {
        renderWithRouterAndAuth(<BikeConfirmationPage />, {
          route: '/comunidades/devolver-bicicleta/confirmacao',
        });
        const loadingText = screen.getByText('Página não encontrada');
        expect(loadingText).toBeInTheDocument();
      });
    });
  });
});
