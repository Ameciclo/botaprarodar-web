import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeFinalPage from './BikeFinalPage';

describe('BikeFinalPage', () => {
  function commonExpects(
    location: any,
    text1: string,
    text2: string,
    communityId: string,
    type: string,
  ) {
    expect(location.pathname).toEqual('/comunidades/bicicleta/final');
    expect(location.state).toEqual({ communityId, type });

    expect(screen.getByTestId('icon-confirm')).toBeInTheDocument();
    expect(screen.getByTestId('again')).toBeInTheDocument();
    expect(screen.getByTestId('goback-community')).toBeInTheDocument();
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
    expect(screen.getByText('Voltar para o início')).toBeInTheDocument();
  }

  function renderPageAndReturnHistory(communityId: string, type: string) {
    const { history } = renderWithRouterAndAuth(<BikeFinalPage />, {
      route: '/comunidades/bicicleta/final',
      stateParams: { communityId, type },
    });

    return history;
  }

  const communityId = 'my-community-id';
  describe('when has state params', () => {
    it.each`
      testCase        | messageText                | buttonText
      ${'withdraw'}   | ${'Empréstimo realizado!'} | ${'Emprestar outra bicicleta'}
      ${'devolution'} | ${'Devolução realizada!'}  | ${'Devolver outra bicicleta'}
    `(
      'should render correctly for $testCase',
      async ({ testCase, messageText, buttonText }) => {
        const { location } = renderPageAndReturnHistory(communityId, testCase);
        commonExpects(location, messageText, buttonText, communityId, testCase);
      },
    );

    it.each`
      testCase        | url                                   | buttonText
      ${'withdraw'}   | ${'/comunidades/emprestar-bicicleta'} | ${'Emprestar outra bicicleta'}
      ${'devolution'} | ${'/comunidades/devolver-bicicleta'}  | ${'Devolver outra bicicleta'}
    `(
      'should redirect to redo all steps when clicking first button for $testCase',
      async ({ testCase, url, buttonText }) => {
        const historyRender = renderPageAndReturnHistory(communityId, testCase);
        userEvent.click(screen.getByText(buttonText));

        await waitFor(() => expect(historyRender.location.pathname).toBe(url));
      },
    );
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
