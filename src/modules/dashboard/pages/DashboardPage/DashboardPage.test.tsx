import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
  act,
} from '@testing-library/react';
import DashboardService from 'modules/dashboard/services/DashboardService';
import DashboardInfo from 'modules/dashboard/models/DashboardInfo';
import DashboardPage from './DashboardPage';

jest.mock('../../services/DashboardService');

const mockedDashboardService = DashboardService as jest.Mocked<
  typeof DashboardService
>;

describe('Dashboard Page', () => {
  beforeEach(() => {
    const mockedDashboard: DashboardInfo = {
      usersQuantity: 0,
      newUsers: 0,
      womenUsers: 0,
      communitiesQuantity: 0,
      bikesQuantity: 0,
      bikesInUse: 0,
      bikersCommunities: [],
      bikesPerCommunities: [],
      withdrawalsPerCommunities: [],
      travelsDone: 0,
      travelsWithRideGiven: 0,
      incidentsHappened: 0,
      withdrawalsReason: [],
      destination: [],
    };
    mockedDashboardService.dashboardInfo.mockResolvedValue(mockedDashboard);

    Object.defineProperty(global.SVGElement.prototype, 'getBBox', {
      writable: true,
      value: jest.fn().mockReturnValue({
        x: 0,
        y: 0,
      }),
    });
    Object.defineProperty(global.SVGElement.prototype, 'getScreenCTM', {
      writable: true,
      value: jest.fn().mockReturnValue({
        x: 0,
        y: 0,
      }),
    });
    Object.defineProperty(global.SVGElement.prototype, 'createSVGMatrix', {
      writable: true,
      value: jest.fn().mockReturnValue({
        x: 10,
        y: 10,
        inverse: () => {
          return 0;
        },
        multiply: () => {
          return 0;
        },
      }),
    });
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
