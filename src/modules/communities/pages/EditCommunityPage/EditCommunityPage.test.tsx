import { BrowserRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import CommunityService from 'modules/communities/services/CommunityService';
import { MockedFirstCommunity } from 'modules/communities/mocks/MockedCommunity';
import EditCommunityPage from './EditCommunityPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: MockedFirstCommunity.id,
  }),
}));

jest.mock('../../services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

const renderElement = () =>
  act(async () => {
    await render(
      <BrowserRouter>
        <EditCommunityPage />
      </BrowserRouter>,
    );
  });

describe('Edit community', () => {
  it('renders page', async () => {
    mockedCommunityService.getCommunityById.mockResolvedValue(
      MockedFirstCommunity,
    );
    await renderElement();
    expect(
      await screen.findByText('Editar Comunidade XPTO'),
    ).toBeInTheDocument();
    expect(
      await screen.queryByText('DELETAR COMUNIDADE'),
    ).not.toBeInTheDocument();
  });

  it('renders page exception', async () => {
    jest
      .spyOn(CommunityService, 'getCommunityById')
      .mockRejectedValue(new Error('Error'));
    await renderElement();
    expect(await screen.findByText('Serviço indisponível')).toBeInTheDocument();
  });
});
