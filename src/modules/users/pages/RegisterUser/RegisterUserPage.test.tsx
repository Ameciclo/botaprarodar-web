import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouterAndAuth, mockedComponent } from 'setupTests';
import RegisterUserPage from './RegisterUserPage';

jest.mock('./components/RegisterUserForm/RegisterUserForm', () => props => {
  return mockedComponent('register-user-form-mocked')(props);
});

describe('RegisterUserPage', () => {
  let communityId;

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
    });

    it('should render correctly', async () => {
      const { history } = renderWithRouterAndAuth(<RegisterUserPage />, {
        route: '/comunidades/cadastrar-usuario',
        stateParams: { communityId },
      });

      const { location } = history;

      const title = screen.getByRole('heading', { name: 'Voltar' });
      const form = screen.getByTestId('form-register');

      expect(location.pathname).toEqual('/comunidades/cadastrar-usuario');
      expect(location.state).toEqual({ communityId: 'my-community-id' });

      expect(title).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(form).toHaveAttribute('communityid', communityId);
    });

    it('should redirect to home when clicking back', async () => {
      const { history } = renderWithRouterAndAuth(<RegisterUserPage />, {
        route: '/comunidades/cadastrar-usuario',
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
      const { history } = renderWithRouterAndAuth(<RegisterUserPage />, {
        route: '/comunidades/cadastrar-usuario',
        stateParams: {},
      });

      const feedbackError = screen.getByTestId('empty-state');
      const feedbackHeading = screen.getByRole('heading', { name: 'Opss!' });
      const feedbackSubHeading = screen.getByRole('heading', {
        name: 'Pagina não encontrada',
      });

      expect(feedbackError).toBeInTheDocument();
      expect(feedbackHeading).toBeInTheDocument();
      expect(feedbackSubHeading).toBeInTheDocument();

      const { location } = history;
      expect(location.pathname).toEqual('/comunidades/cadastrar-usuario');
    });
  });
});
