import { act, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from '../../../../../setupTests';
import CommunityManagementPage from './CommunityManagementPage';
import { MockedFirstCommunity } from '../../../mocks/MockedCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
import { BrowserRouter } from 'react-router-dom';

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

describe('Community Management Page', () => {
  describe('render community page with right information', () => {
    it('should show commmunity name', async () => {
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
      // const { history } = wrapper;
      // expect(history.location.pathname).toBe(
      //   `/gerenciador-de-comunidade/${MockedFirstCommunity.id}`,
      // );
      // expect(mockedCommunityService.getCommunityById).toHaveBeenCalledWith(
      //   MockedFirstCommunity.id,
      // );
      expect(
        screen.getByRole('heading', { name: MockedFirstCommunity.name }),
      ).toBeInTheDocument();
    });
  });
});
