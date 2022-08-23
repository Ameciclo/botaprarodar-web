import { MemoryRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import CommunityService from 'modules/communities/services/CommunityService';
import EditCommunityPage from './CreateAndEditCommunity';

const renderElement = () =>
  act(async () => {
    await render(
      <MemoryRouter initialEntries={['/comunidades/editar/1234']}>
        <EditCommunityPage />
      </MemoryRouter>,
    );
  });

describe('Edit community', () => {
  it('renders page exception', async () => {
    jest
      .spyOn(CommunityService, 'getCommunityById')
      .mockRejectedValue(new Error('Error'));
    await renderElement();
    expect(await screen.findByText('Cadastrar comunidade')).toBeInTheDocument();
  });
});
