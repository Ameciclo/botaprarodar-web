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
  MockedSecondCommunity,
} from '../../../mocks/MockedCommunity';
import CommunitySelectionPage from './CommunitiesSelectionPage';

jest.mock('../../../services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

describe('CommunitySelectionPage', () => {
  beforeEach(() => {
    mockedCommunityService.getAllCommunities.mockResolvedValue([]);
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
    it('should render a grid to show the communities', async () => {
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

    it('renders no communities and an empty state message', async () => {
      await act(async () => {
        render(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const emptyStateText = 'Nenhuma comunidade cadastrada!';
      const registerCommunity = 'Cadastrar comunidade';
      expect(screen.getByText(emptyStateText)).toBeInTheDocument();
      expect(screen.getByText(registerCommunity)).toBeInTheDocument();
    });
  });

  describe('Search bar', () => {
    it('should update page on change', async () => {
      await act(async () => {
        render(
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
        render(
          <BrowserRouter>
            <CommunitySelectionPage />
          </BrowserRouter>,
        );
      });

      const searchInput = screen.getByPlaceholderText(
        'Que comunidade você está procurando?',
      ) as HTMLInputElement;

      fireEvent.change(searchInput, { target: { value: 'Lorem Ipsum' } });

      expect(
        screen.getByText(/Não há resultados para essa busca: Lorem Ipsum./i),
      ).toBeInTheDocument();
    });

    it('should filter cards  when searching for community', async () => {
      mockedCommunityService.getAllCommunities.mockResolvedValue([
        MockedFirstCommunity,
        MockedSecondCommunity,
      ]);
      await act(async () => {
        render(
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
      expect(screen.queryByText(/XPTO/i)).toBeInTheDocument();
      expect(screen.queryByText(/Nome teste/i)).toBeInTheDocument();

      fireEvent.change(searchInput, { target: { value: 'teste' } });

      communitiesList = screen.getByTestId('communities-grid');

      expect(communitiesList.childElementCount).toBe(1);
      expect(screen.queryByText(/XPTO/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Nome teste/i)).toBeInTheDocument();
    });
  });
});
