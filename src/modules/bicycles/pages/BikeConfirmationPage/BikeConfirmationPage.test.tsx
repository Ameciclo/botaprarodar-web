import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndAuth } from 'setupTests';
import { mockedBike } from 'modules/bicycles/mocks/BikeMocks';
import BikeService from 'modules/bicycles/services/BikeService';
import { mockedFormValues } from 'modules/bicycles/mocks/FormValuesMock';
import { MockedFirstUser, mockedUser } from 'modules/users/mocks/MockedUser';
import { UserService } from 'modules/users/services';
import BikeConfirmationPage from './BikeConfirmationPage';

const mockUser = MockedFirstUser;
const bikeMock = mockedBike();
let communityId;
let selectedBike;
let selectedUser;
let historyRender;
let formValues;

jest.mock('modules/bicycles/services/BikeService');
const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;
jest.mock('modules/users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

describe('Render Bike Confirmation Page', () => {
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

  describe('BikeConfirmationPage', () => {
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
        expect(screen.getByTestId('bike-pic')).toBeInTheDocument();
        expect(screen.getByTestId('bike-user-card')).toBeInTheDocument();
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
          expect(screen.getByTestId('bike-pic')).toBeInTheDocument();
          expect(screen.getByTestId('bike-user-card')).toBeInTheDocument();
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
});
