import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CommunityService from 'modules/communities/services/CommunityService';
import CommunityDisplayPage from './CommunitiesDisplayPage';
import { MockedFirstCommunity } from '../../../mocks/MockedCommunity';

jest.mock('../../../services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

describe('CommunityPage', () => {
  it('should render loading component', async () => {
    mockedCommunityService.getAllCommunities.mockResolvedValue([]);
    act(() => {
      render(
        <BrowserRouter>
          <CommunityDisplayPage isSelectingCommunities={false} />
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
    mockedCommunityService.getAllCommunities.mockResolvedValue([
      MockedFirstCommunity,
    ]);
    await act(async () => {
      render(
        <BrowserRouter>
          <CommunityDisplayPage isSelectingCommunities={false} />
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
          <CommunityDisplayPage isSelectingCommunities={false} />
        </BrowserRouter>,
      );
    });

    const emptyStateText = 'Nenhuma comunidade cadastrada!';
    expect(screen.getByText(emptyStateText)).toBeInTheDocument();
  });
});
