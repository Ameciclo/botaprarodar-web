import { act, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from '../../../../../setupTests';
import { BrowserRouter } from 'react-router-dom';
import CommunityManagementPage from './CommunityManagementPage';
import { MockedFirstCommunity } from '../../../mocks/MockedCommunity';
import { MockedAmountCommunityXPTO } from 'modules/communities/mocks/MockedAmountBikesPerCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
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
  describe('render community page with right information', () => {
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

    it('should show commmunity name when is sucess', async () => {
      expect(
        screen.getByRole('heading', { name: MockedFirstCommunity.name }),
      ).toBeInTheDocument();
    });

    it('should show bike loan icon', () => {
      const icon = screen.getByAltText(/Ícone para empréstimo de bicicleta/i);
      expect(icon).toHaveAttribute('src', EmprestarBikeIcon);
    });

    it('should show bike return icon', () => {
      const icon = screen.getByAltText(/Ícone para devolução de bicicleta/i);
      expect(icon).toHaveAttribute('src', DevolverBikeIcon);
    });

    it('should show bike registration icon', () => {
      const icon = screen.getByAltText(/Ícone para cadastro de bicicleta/i);
      expect(icon).toHaveAttribute('src', CadastrarBikeIcon);
    });

    describe('should show community labels when is sucess', () => {
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
      describe.skip('should show labels numbers', () => {
        it('should show label amount of total number of bikes per community ', () => {
          const labelAmount = screen.getByText(/Total de bicicletas/i);
          expect(labelAmount).toBeInTheDocument;
        });
        it('should show label amount of number of avaliable bikes ', () => {
          const labelAmount = screen.getByText(/Bicicletas disponíveis/i);
          expect(labelAmount).toBeInTheDocument;
        });
        it('should show label amount of number of borrowed bikes ', () => {
          const labelAmount = screen.getByText(/Bicicletas emprestadas/i);
          expect(labelAmount).toBeInTheDocument;
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
