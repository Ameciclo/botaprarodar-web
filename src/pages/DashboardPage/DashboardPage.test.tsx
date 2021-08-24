import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
  act,
} from '@testing-library/react';
import DashboardService from 'services/DashboardService/DashboardService';
import DashboardInfo from 'models/DashboardInfo/DashboardInfo';
import DashboardPage from './DashboardPage';

jest.mock('../../services/DashboardService/DashboardService');

const mockedDashboardService = DashboardService as jest.Mocked<
  typeof DashboardService
>;

describe('Dashboard Page', () => {
  beforeEach(() => {
    const mockedDashboard: DashboardInfo = {
      communitiesQuantity: 0,
      bikesQuantity: 0,
      bikesPerCommunities: [],
      withdrawalsPerCommunities: [],
      travelsDone: 0,
      incidentsHappened: 0,
      withdrawalsReason: [],
    };
    mockedDashboardService.dashboardInfo.mockResolvedValue(mockedDashboard);
  });

  it('Should render Dashboard page', async () => {
    const { container } = render(<DashboardPage />);
    await waitFor(() => expect(container).toBeInTheDocument());
  });

  it('should render loading component', async () => {
    act(() => {
      render(<DashboardPage />);
    });

    const loadingText = screen.getByText('Carregando, por favor aguarde...');
    expect(loadingText).toBeInTheDocument();

    await waitForElementToBeRemoved(() =>
      screen.getByText('Carregando, por favor aguarde...'),
    );
  });
});
