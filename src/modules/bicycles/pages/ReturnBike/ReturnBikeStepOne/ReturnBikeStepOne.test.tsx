import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import ReturnBikeStepOne from './ReturnBikeStepOne';

describe('ReturnBikeStepOne', () => {
  let communityId;
  let selectedBike;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
      selectedBike = '123';
    });

    it('should render correctly', async () => {
      const { history, container } = renderWithRouterAndAuth(
        <ReturnBikeStepOne />,
        {
          route: '/comunidades/devolver-bicicleta/formulario',
          stateParams: { communityId, selectedBike },
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
      expect(screen.getByTestId('bike-neighborhood-test')).toBeInTheDocument();

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
        stateParams: { communityId, selectedBike },
      });

      const title = screen.getByText('Voltar');

      fireEvent.click(title);

      await waitFor(() =>
        expect(history.location.pathname).toBe(
          `/comunidades/devolver-bicicleta`,
        ),
      );
    });

    it('should show empty state when having no parameters', async () => {
      renderWithRouterAndAuth(<ReturnBikeStepOne />, {
        route: '/comunidades/devolver-bicicleta/formulario',
      });
      const loadingText = screen.getByText('Página não encontrada');
      expect(loadingText).toBeInTheDocument();
    });
  });
});
