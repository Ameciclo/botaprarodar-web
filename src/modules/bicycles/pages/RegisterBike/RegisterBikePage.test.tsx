import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouterAndAuth, mockedComponent } from 'setupTests';
import RegisterBikePage from './RegisterBikePage';

jest.mock('./components/RegisterBikeForm/RegisterBikeForm', () => props => {
  return mockedComponent('register-bike-form-mocked')(props);
});

describe('RegisterBikePage', () => {
  let communityId;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
    });

    it('should render correctly', async () => {
      const { history } = renderWithRouterAndAuth(<RegisterBikePage />, {
        route: '/comunidades/cadastrar-bicicleta',
        stateParams: { communityId },
      });

      const { location } = history;

      const title = screen.getByRole('heading', { name: 'Voltar' });
      const form = screen.getByTestId('form-register');

      expect(location.pathname).toEqual('/comunidades/cadastrar-bicicleta');
      expect(location.state).toEqual({ communityId: 'my-community-id' });

      expect(title).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(form).toHaveAttribute('communityid', communityId);
    });

    it('should redirect to home when clicking back', async () => {
      const { history } = renderWithRouterAndAuth(<RegisterBikePage />, {
        route: '/comunidades/cadastrar-bicicleta',
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
  });

  describe('when has not state params', () => {
    it('should show feedback error', () => {
      const { history } = renderWithRouterAndAuth(<RegisterBikePage />, {
        route: '/comunidades/cadastrar-bicicleta',
        stateParams: {},
      });

      const feedbackError = screen.getByTestId('empty-state');
      const feedbackHeading = screen.getByRole('heading', { name: 'Opss!' });
      const feedbackSubHeading = screen.getByRole('heading', {
        name: 'Página não encontrada',
      });

      expect(feedbackError).toBeInTheDocument();
      expect(feedbackHeading).toBeInTheDocument();
      expect(feedbackSubHeading).toBeInTheDocument();

      const { location } = history;
      expect(location.pathname).toEqual('/comunidades/cadastrar-bicicleta');
    });
  });
});
