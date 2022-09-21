import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import LendBikePage from './LendBikePage';

describe('LandBikePage', () => {
  let communityId;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
    });

    it('should render correctly', async () => {
      const { history } = renderWithRouterAndAuth(<LendBikePage />, {
        route: '/comunidades/emprestar-bicicleta',
        stateParams: { communityId },
      });

      const { location } = history;

      const title = screen.getByRole('heading', { name: 'Voltar' });

      expect(location.pathname).toEqual('/comunidades/emprestar-bicicleta');
      expect(location.state).toEqual({ communityId: 'my-community-id' });

      expect(title).toBeInTheDocument();
    });

    it('should redirect to home when clicking back', async () => {
      const { history } = renderWithRouterAndAuth(<LendBikePage />, {
        route: '/comunidades/emprestar-bicicleta',
        stateParams: { communityId },
      });

      const title = screen.getByText('Voltar');

      fireEvent.click(title);

      await waitFor(() =>
        expect(history.location.pathname).toBe(
          `/comunidades/gerenciador-de-comunidade/${communityId}`,
        ),
      );
    });

    it('should show empty state when having no parameters', async () => {
      renderWithRouterAndAuth(<LendBikePage />, {
        route: '/comunidades/emprestar-bicicleta',
      });
      const loadingText = screen.getByText('Página não encontrada');
      expect(loadingText).toBeInTheDocument();
    });
  });
});
