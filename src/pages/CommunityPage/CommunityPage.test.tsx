import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CommunityService from 'services/CommunityService/CommunityService';
import CommunityPage from './CommunityPage';

jest.mock('../../services/CommunityService/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

describe('CommunityPage', () => {
  it('should render loading component', async () => {
    mockedCommunityService.getAllCommunities.mockResolvedValue([]);
    act(() => {
      render(
        <BrowserRouter>
          <CommunityPage />
        </BrowserRouter>,
      );
    });
    const loadingText = screen.getByText('Carregando, por favor aguarde...');
    expect(loadingText).toBeInTheDocument();
    await waitForElementToBeRemoved(() =>
      screen.getByText('Carregando, por favor aguarde...'),
    );
  });

  it('renders a grid to show the communities', async () => {
    const date = new Date();
    mockedCommunityService.getAllCommunities.mockResolvedValue([
      {
        id: '1',
        address: 'Rua teste',
        created_date: date,
        description: 'Descrição comunidade teste',
        name: 'Comunidade teste',
        org_email: 'comunidade@teste.com',
        org_name: 'nome',
        bicycles: [],
        withdrawals: [],
      },
    ]);
    await act(async () => {
      render(
        <BrowserRouter>
          <CommunityPage />
        </BrowserRouter>,
      );
    });

    const communitiesList = screen.getByTestId('communities-grid');
    expect(communitiesList).toBeInTheDocument();
  });

  it('renders no communities and an empty state message', async () => {
    mockedCommunityService.getAllCommunities.mockResolvedValue([]);

    await act(async () => {
      render(
        <BrowserRouter>
          <CommunityPage />
        </BrowserRouter>,
      );
    });

    const emptyStateText = 'Nenhuma comunidade cadastrada!';
    expect(screen.getByText(emptyStateText)).toBeInTheDocument();
  });
});
