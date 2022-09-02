import { waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedAmountsBikesPerCommunity } from 'modules/bicycles/mocks/BikeMocks';
import BikeService from 'modules/bicycles/services/BikeService';
import CommunityService from 'modules/communities/services/CommunityService';
import { MockedFirstCommunity } from '../../../mocks/MockedCommunity';
import { renderWithRouterAndAuth } from '../../../../../setupTests';
import CommunityManagementPage from './CommunityManagementPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: MockedFirstCommunity.id,
  }),
}));

jest.mock('../../../../../shared/components/Toast/Toast', () => ({
  ...jest.requireActual('../../../../../shared/components/Toast/Toast'),
  error: jest.fn(),
}));

jest.mock(
  '../../../../../shared/components/CustomCardWithIcon/CustomCardWithIcon',
  () => () => 'CustomCardWithIcon-component-mock',
);
jest.mock(
  '../../../../../shared/components/CustomLabel/CustomLabel',
  () => () => 'CustomLabel-component-mock',
);

jest.mock('../../../services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

jest.mock('../../../../bicycles/services/BikeService');
const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;

describe('Community Management Page', () => {
  it('should show loading info when page is loading', () => {
    mockedCommunityService.getCommunityById.mockResolvedValue(
      MockedFirstCommunity,
    );

    mockedBikeService.getAmountFilteredBikesPerCommunity.mockResolvedValue(
      MockedAmountsBikesPerCommunity,
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

  describe('render community page with right information when sucess', () => {
    beforeEach(() => {
      mockedCommunityService.getCommunityById.mockResolvedValue(
        MockedFirstCommunity,
      );

      mockedBikeService.getAmountFilteredBikesPerCommunity.mockResolvedValue(
        MockedAmountsBikesPerCommunity,
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

    describe('should show custom card with icon', () => {
      it('should show card name', () => {
        const cardName = screen.getAllByText(
          'CustomCardWithIcon-component-mock',
        );
        waitFor(() => expect(cardName).toBeInTheDocument());
      });
    });

    describe('should show community labels', () => {
      it('should show labels name', () => {
        const labelName = screen.getAllByText('CustomLabel-component-mock');
        waitFor(() => expect(labelName.length).toHaveValue(3));
      });
    });
  });

  describe('render feedback error', () => {
    beforeEach(() => {
      mockedCommunityService.getCommunityById.mockRejectedValue(new Error());

      mockedBikeService.getAmountFilteredBikesPerCommunity.mockResolvedValue(
        MockedAmountsBikesPerCommunity,
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
    it('should return a feedback error', () => {
      expect(screen.findByText('Erro ao carregar comunidade.')).toBeTruthy();
    });
  });

  describe('routes', () => {
    it('should receive correctly url', async () => {
      mockedCommunityService.getCommunityById.mockResolvedValue(
        MockedFirstCommunity,
      );

      mockedBikeService.getAmountFilteredBikesPerCommunity.mockResolvedValue(
        MockedAmountsBikesPerCommunity,
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

  describe('render community listing feedback error', () => {
    beforeEach(() => {
      mockedCommunityService.getCommunityById.mockResolvedValue(
        MockedFirstCommunity,
      );

      mockedBikeService.getAmountFilteredBikesPerCommunity.mockRejectedValue(
        new Error(),
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
    it('should return community listing feedback error', () => {
      expect(
        screen.findByText('Erro ao carregar lista de comunidades.'),
      ).toBeTruthy();
    });
  });
});
