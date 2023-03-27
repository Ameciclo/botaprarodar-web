import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndAuth } from 'setupTests';
import ReturnBikeStepOne from './ReturnBikeStepOne';

describe('ReturnBikeStepOne', () => {
  let communityId;
  let selectedBike;
  let formValues;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
      selectedBike = '123';
      formValues = undefined;
    });

    it('should render correctly', () => {
      const { history, container } = renderWithRouterAndAuth(
        <ReturnBikeStepOne />,
        {
          route: '/comunidades/devolver-bicicleta/formulario',
          stateParams: { communityId, selectedBike, formValues },
        },
      );

      const { location } = history;
      const title = screen.getByRole('heading', { name: 'Voltar' });

      expect(location.pathname).toEqual(
        '/comunidades/devolver-bicicleta/formulario',
      );
      expect(location.state).toEqual({
        communityId: 'my-community-id',
        selectedBike: '123',
        formValues: undefined,
      });
      expect(title).toBeInTheDocument();
      expect(screen.getByText('Questionário')).toBeInTheDocument();
      expect(screen.getByText('Responda ao questionário')).toBeInTheDocument();

      expect(
        screen.getByText('A bicicleta foi usada para que?'),
      ).toBeInTheDocument();
      expect(screen.getByTestId('select-bike-use-test')).toBeInTheDocument();

      expect(
        screen.getByText('Para qual bairro você foi?'),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId('select-bike-neighborhood-test'),
      ).toBeInTheDocument();

      expect(
        screen.getByText(
          'Você sofreu alguma violência no trânsito durante o seu trajeto? (exemplo: carro passou perto e rápido demais, foi fechada numa curva, etc)?',
        ),
      ).toBeInTheDocument();
      expect(screen.getByText('Precisou levar carona?')).toBeInTheDocument();
      expect(container.querySelectorAll(`input[type="radio"]`).length).toBe(4);

      expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    it('should redirect to first page of return bike when clicking back', async () => {
      const { history } = renderWithRouterAndAuth(<ReturnBikeStepOne />, {
        route: '/comunidades/devolver-bicicleta/formulario',
        stateParams: { communityId, selectedBike, formValues },
      });

      const title = screen.getByText('Voltar');

      fireEvent.click(title);

      await waitFor(() =>
        expect(history.location.pathname).toBe(
          `/comunidades/devolver-bicicleta`,
        ),
      );
    });

    it.skip('should allow submit form only with all fields filled', async () => {
      const { history, container } = renderWithRouterAndAuth(
        <ReturnBikeStepOne />,
        {
          route: '/comunidades/devolver-bicicleta/formulario',
          stateParams: { communityId, selectedBike },
        },
      );
      const { location } = history;
      const submitButton = screen.getByTestId('submit-button');
      fireEvent.click(submitButton);

      await waitFor(() => {
        const errorMessage = container.querySelector(`p span`);

        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage?.textContent).toBe(
          'Informação do bairro de destino é obrigatória',
        );
        expect(location.pathname).toEqual(
          '/comunidades/devolver-bicicleta/formulario',
        );
        expect(location.state).toEqual({
          communityId: 'my-community-id',
          selectedBike: '123',
        });
      });
    });

    it.skip('should go to the next page when all fields were filled', async () => {
      const { container, history } = renderWithRouterAndAuth(
        <ReturnBikeStepOne />,
        {
          route: '/comunidades/devolver-bicicleta/formulario',
          stateParams: { communityId, selectedBike, formValues },
        },
      );

      const neighborhood = screen.getByTestId('bike-neighborhood-test');
      const submitButton = screen.getByTestId('submit-button');
      const radioButtonRideShare = container.querySelectorAll<HTMLInputElement>(
        `input[type="radio"][name="rideShare"]`,
      );
      const optionYes = radioButtonRideShare[0];

      fireEvent.change(neighborhood, { target: { value: 'Bairro X' } });
      userEvent.click(optionYes);
      userEvent.click(submitButton);

      await waitFor(() => {
        expect(history.location.pathname).toEqual(
          '/comunidades/devolver-bicicleta/confirmacao',
        );
        expect(history.location.state).toEqual({
          communityId: 'my-community-id',
          selectedBike: '123',
          formValues: {
            bikeUse: 'Para realizar entregas de aplicativos.',
            neighborhood: 'Bairro X',
            accidents: 'Não',
            rideShare: 'Sim',
          },
        });
      });
    });
  });

  describe('when has no state params', () => {
    it('should show empty state when having no parameters', () => {
      renderWithRouterAndAuth(<ReturnBikeStepOne />, {
        route: '/comunidades/devolver-bicicleta/formulario',
      });
      const loadingText = screen.getByText('Página não encontrada');
      expect(loadingText).toBeInTheDocument();
    });
  });
});
