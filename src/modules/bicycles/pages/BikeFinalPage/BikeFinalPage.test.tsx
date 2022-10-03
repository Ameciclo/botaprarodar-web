import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeFinalPage from './BikeFinalPage';

describe('BikeFinalPage', () => {
  let communityId;
  let type;
  let historyRender;
  let buttonText;

  function commonExpects(location: any, text1: string, text2: string) {
    expect(location.pathname).toEqual('/comunidades/bicicleta/final');
    expect(location.state).toEqual({ communityId, type });

    expect(screen.getByTestId('icon-confirm')).toBeInTheDocument();
    expect(screen.getByTestId('again')).toBeInTheDocument();
    expect(screen.getByTestId('goback-community')).toBeInTheDocument();
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
    expect(screen.getByText('Voltar para o início')).toBeInTheDocument();
  }

  describe('when has state params', () => {
    beforeEach(() => {
      communityId = 'my-community-id';
    });

    describe('and it is a withdraw', () => {
      beforeEach(() => {
        buttonText = 'Emprestar outra bicicleta';
        type = 'withdraw';
        const { history } = renderWithRouterAndAuth(<BikeFinalPage />, {
          route: '/comunidades/bicicleta/final',
          stateParams: { communityId, type },
        });
        historyRender = history;
      });
      it('should render correctly', async () => {
        const { location } = historyRender;

        commonExpects(location, 'Empréstimo realizado!', buttonText);
      });

      it('should redirect to redo all steps when clicking first button', async () => {
        userEvent.click(screen.getByText(buttonText));

        await waitFor(() =>
          expect(historyRender.location.pathname).toBe(
            '/comunidades/emprestar-bicicleta',
          ),
        );
      });
    });

    describe('and it is a devolution', () => {
      beforeEach(() => {
        buttonText = 'Devolver outra bicicleta';
        type = 'devolution';
        const { history } = renderWithRouterAndAuth(<BikeFinalPage />, {
          route: '/comunidades/bicicleta/final',
          stateParams: { communityId, type },
        });
        historyRender = history;
      });

      it('should render correctly for devolution', async () => {
        const { location } = historyRender;

        commonExpects(location, 'Devolução realizada!', buttonText);
      });

      it('should redirect to redo all steps when clicking first button for devolution', async () => {
        userEvent.click(screen.getByText(buttonText));

        await waitFor(() =>
          expect(historyRender.location.pathname).toBe(
            '/comunidades/devolver-bicicleta',
          ),
        );
      });
    });
  });
  describe('when does not have state params', () => {
    it('should show empty state when having no parameters', async () => {
      renderWithRouterAndAuth(<BikeFinalPage />, {
        route: '/comunidades/bicicleta/final',
      });
      const loadingText = screen.getByText('Página não encontrada');
      expect(loadingText).toBeInTheDocument();
    });
  });
});
