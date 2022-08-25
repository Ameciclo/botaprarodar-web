import { MemoryRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import CreateCommunityPage from './CreateCommunityPage';

const renderElement = () =>
  act(async () => {
    await render(
      <MemoryRouter initialEntries={['/comunidades/criar']}>
        <CreateCommunityPage />
      </MemoryRouter>,
    );
  });

describe('Create community', () => {
  it('renders page header', async () => {
    await renderElement();
    expect(await screen.findByText('Cadastrar comunidade')).toBeInTheDocument();
  });
});
