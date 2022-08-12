import { renderWithRouterAndAuth } from '../../../../../setupTests';
import CommunityManagementPage from './CommunityManagementPage';

let wrapper: any;

describe('Community Management Page', () => {
  beforeEach(() => {
    wrapper = renderWithRouterAndAuth(<CommunityManagementPage />, {
      route: '/gerenciador-de-comunidade/:id',
    });
  });

  it('should render community management page', async () => {
    expect(wrapper.container).toBeInTheDocument();
  });
});
