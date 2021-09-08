import { render, screen, act } from '@testing-library/react';
import CommunityService from 'modules/communities/services/CommunityService';
import { MemoryRouter } from 'react-router-dom';

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
  // it('renders page with community', async () => {
  //   jest.spyOn(CommunityService, 'getCommunityById').mockResolvedValue({
  //     address: 'Recife',
  //     created_date: 1604411814596,
  //     description: 'Jest community',
  //     id: '1234',
  //     name: 'Jest',
  //     org_email: 'jest@jest.com',
  //     org_name: 'Jest',
  //   });
  //   await renderElement();
  //   expect(await screen.findByText('Editar Jest')).toBeInTheDocument();
  // });

  it('renders page exception', async () => {
    jest
      .spyOn(CommunityService, 'getCommunityById')
      .mockRejectedValue(new Error('Error'));
    await renderElement();
    expect(await screen.findByText('Criar comunidade')).toBeInTheDocument();
  });
});
