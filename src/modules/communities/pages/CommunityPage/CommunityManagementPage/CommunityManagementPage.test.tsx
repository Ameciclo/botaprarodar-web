import { waitFor, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from '../../../../../setupTests';
import { BrowserRouter } from 'react-router-dom';
import CommunityManagementPage from './CommunityManagementPage';
import { MockedFirstCommunity } from '../../../mocks/MockedCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
import toast from 'shared/components/Toast/Toast';

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

describe('Community Management Page', () => {
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

  describe('render community page with right information when sucess', () => {
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
        screen.debug;
        const labelName = screen.getAllByText('CustomLabel-component-mock');
        waitFor(() => expect(labelName.length).toHaveValue(3));
      });
    });
  });

  describe('render feedback error', () => {
    beforeEach(() => {
      mockedCommunityService.getCommunityById.mockRejectedValue(new Error());

      renderWithRouterAndAuth(
        <BrowserRouter>
          <CommunityManagementPage />
        </BrowserRouter>,
        {
          route: `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
        },
      );
    });

    it.skip('should return a feedback error', () => {
      expect(toast.error).toHaveBeenCalled();
      screen.debug();
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
