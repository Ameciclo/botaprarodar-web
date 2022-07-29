import { act, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from '../../../../../setupTests';
import CommunityManagementPage from './CommunityManagementPage';
import { MockedFirstCommunity } from '../../../mocks/MockedCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
import { BrowserRouter } from 'react-router-dom';
import {
  CadastrarBikeIcon,
  EmprestarBikeIcon,
  DevolverBikeIcon,
  CadastrarUsuarioIcon,
} from 'shared/assets/icons';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: MockedFirstCommunity.id,
  }),
}));
jest.mock('../../../services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

describe('Community Management Page of the Comunidade XPTO', () => {
  describe('render community page with right information', () => {
    it('should show loading info when page is loading', () => {
      mockedCommunityService.getCommunityById.mockResolvedValue(
        MockedFirstCommunity,
      );
      renderWithRouterAndAuth(
        <BrowserRouter>
          <CommunityManagementPage />
        </BrowserRouter>,
        {
          route: `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
        },
      );
      expect(
        screen.getByRole('heading', {
          name: /Carregando, por favor aguarde.../i,
        }),
      ).toBeInTheDocument();
    });
    it('should show commmunity name when is sucess', async () => {
      mockedCommunityService.getCommunityById.mockResolvedValue(
        MockedFirstCommunity,
      );
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunityManagementPage />
          </BrowserRouter>,
          {
            route: `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
          },
        );
      });
      expect(
        screen.getByRole('heading', { name: MockedFirstCommunity.name }),
      ).toBeInTheDocument();
    });

    describe('should show commmunity icons when is sucess', () => {
      beforeEach(() => {
        mockedCommunityService.getCommunityById.mockResolvedValue(
          MockedFirstCommunity,
        );

        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunityManagementPage />
          </BrowserRouter>,
          {
            route: `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
          },
        );
      });

      it('should show bike loan icon', () => {
        const icon = screen.getByAltText('Ícone para empréstimo de bicicleta');
        expect(icon).toHaveAttribute('src', EmprestarBikeIcon);
      });
      it('should show bike return icon', () => {
        const icon = screen.getByAltText('Ícone para devolução de bicicleta');
        expect(icon).toHaveAttribute('src', DevolverBikeIcon);
      });
      it('should show bike registration icon', () => {
        const icon = screen.getByAltText('Ícone para cadastro de bicicleta');
        expect(icon).toHaveAttribute('src', CadastrarBikeIcon);
      });
    });

    describe('should show community labels when is sucess', () => {
      beforeEach(() => {
        mockedCommunityService.getCommunityById.mockResolvedValue(
          MockedFirstCommunity,
        );

        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunityManagementPage />
          </BrowserRouter>,
          {
            route: `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
          },
        );
      });
      describe('should show labels name', () => {
        it('should show label name of total number of bikes per community ', () => {
          const labelName = screen.getByText(/Total de bicicletas/i);
          expect(labelName).toBeInTheDocument;
        });
        it('should show label name of number of avaliable bikes ', () => {
          const labelName = screen.getByText(/Bicicletas disponíveis/i);
          expect(labelName).toBeInTheDocument;
        });
        it('should show label name of number of borrowed bikes ', () => {
          const labelName = screen.getByText(/Bicicletas emprestadas/i);
          expect(labelName).toBeInTheDocument;
        });
      });
    });
  });

  describe('routes', () => {
    it('should receive correctly url', async () => {
      mockedCommunityService.getCommunityById.mockResolvedValue(
        MockedFirstCommunity,
      );
      const { history } = renderWithRouterAndAuth(
        <BrowserRouter>
          <CommunityManagementPage />
        </BrowserRouter>,
        {
          route: `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
        },
      );

      expect(history.location.pathname).toBe(
        `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
      );
    });
  });
});
