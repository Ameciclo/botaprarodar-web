import { BrowserRouter } from 'react-router-dom';
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import CommunityService from 'modules/communities/services/CommunityService';
import {
  MockedFirstCommunity,
  MockedLoggedInUserManager,
  MockedSecondCommunity,
} from '../../../mocks/MockedCommunity';
import CommunitySelectionPage from './CommunitiesSelectionPage';
import { renderWithRouterAndAuth, setUserAuthenticated } from 'setupTests';

jest.mock('../../../services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

describe('CommunitySelectionPage', () => {
  beforeEach(() => {
    mockedCommunityService.getAllCommunities.mockResolvedValue([]);
    setUserAuthenticated();
  });

  describe(' Render Community Selection Page', () => {
    it('should render loading component', async () => {
      act(() => {
        render(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });
      const loadingText = screen.getByText('Carregando, por favor aguarde...');
      expect(loadingText).toBeInTheDocument();
      await waitForElementToBeRemoved(() =>
        screen.getByText('Carregando, por favor aguarde...'),
      );
    });

    it('should render only the grid after loading', async () => {
      mockedCommunityService.getAllCommunities.mockResolvedValue([
        MockedFirstCommunity,
      ]);
      await act(async () => {
        render(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const communitiesList = screen.getByTestId('communities-grid');
      expect(communitiesList).toBeInTheDocument();
    });

    it('should render a community card if user is a community manager', async () => {
      mockedCommunityService.getAllCommunities.mockResolvedValue([
        MockedLoggedInUserManager,
        MockedFirstCommunity,
      ]);
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const community = screen.getByTestId('community-card-grid');
      const communityName = screen.getByRole('heading', {
        name: /comunidade gerenciada/i,
      });
      const communityNameNotPresent = screen.queryByRole('heading', {
        name: /XPTO/i,
      });

      expect(community).toBeInTheDocument();
      expect(communityName).toBeInTheDocument();
      expect(communityNameNotPresent).not.toBeInTheDocument();
    });

    it('should render an empty state if user is not a community manager', async () => {
      setUserAuthenticated();
      mockedCommunityService.getAllCommunities.mockResolvedValue([
        MockedFirstCommunity,
      ]);
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const emptyStateText = 'Não há resultados';
      const registerCommunity =
        'Cadastre uma nova comunidade em nosso aplicaticativo.';
      const communities = screen.queryByTestId('community-card-grid');

      expect(screen.getByText(emptyStateText)).toBeInTheDocument();
      expect(screen.getByText(registerCommunity)).toBeInTheDocument();
      expect(communities).toBeFalsy();
    });

    it('renders no communities and an empty state message', async () => {
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const emptyStateText = 'Nenhuma comunidade cadastrada!';
      const registerCommunity = 'Cadastrar comunidade';
      const communities = screen.queryByTestId('community-card-grid');

      expect(screen.getByText(emptyStateText)).toBeInTheDocument();
      expect(screen.getByText(registerCommunity)).toBeInTheDocument();
      expect(communities).toBeFalsy();
    });
  });

  describe('Search bar', () => {
    it('should update page on change', async () => {
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const searchInput = screen.getByPlaceholderText(
        'Que comunidade você está procurando?',
      ) as HTMLInputElement;

      fireEvent.change(searchInput, { target: { value: 'teste' } });

      expect(searchInput.value).toBe('teste');
    });

    it('should show message when finding no communities', async () => {
      mockedCommunityService.getAllCommunities.mockResolvedValue([
        MockedFirstCommunity,
        MockedSecondCommunity,
      ]);
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const searchInput = screen.getByPlaceholderText(
        'Que comunidade você está procurando?',
      ) as HTMLInputElement;

      const community = screen.queryByTestId('community-card-grid');
      expect(community).toBeInTheDocument();

      fireEvent.change(searchInput, { target: { value: 'Lorem Ipsum' } });

      expect(screen.getByText(/Não há resultados/i)).toBeInTheDocument();
    });

    it('should filter cards  when searching for community', async () => {
      mockedCommunityService.getAllCommunities.mockResolvedValue([
        MockedFirstCommunity,
        MockedSecondCommunity,
        MockedLoggedInUserManager,
      ]);
      await act(async () => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const searchInput = screen.getByPlaceholderText(
        'Que comunidade você está procurando?',
      ) as HTMLInputElement;

      let communitiesList = screen.getByTestId('communities-grid');
      expect(communitiesList.childElementCount).toBe(2);
      expect(screen.queryByText(/Comunidade Gerenciada/i)).toBeInTheDocument();
      expect(screen.queryByText(/Nome teste/i)).toBeInTheDocument();
      expect(screen.queryByText(/XPTO/i)).not.toBeInTheDocument();

      fireEvent.change(searchInput, { target: { value: 'teste' } });

      communitiesList = screen.getByTestId('communities-grid');

      expect(communitiesList.childElementCount).toBe(1);
      expect(screen.queryByText(/XPTO/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Nome teste/i)).toBeInTheDocument();
      expect(
        screen.queryByText(/Comunidade Gerenciada/i),
      ).not.toBeInTheDocument();
    });
  });
});
