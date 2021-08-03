// Qual o foco? Listar os usuários
// O que eu preciso saber? Listar os usuários
// O que eu espero? Uma tabela com a lista de usuários contento seu nome, e-mail, comunidade, status e ações
import { render, screen } from '@testing-library/react';
import UserPage from './UserPage';

describe('UserPage', () => {
  beforeEach(() => {
    jest.mock('../../services/UserService/UserService', () => {
      return {
        default: {
          get: jest.fn(() =>
            Promise.resolve([
              {
                name: 'Antoni',
                communityId: '-MLDOXs3p35DEHg0gdUU',
                telephone: '+55 51 3626-2001',
                status: true,
              },
            ]),
          ),
        },
      };
    });
  });

  it('should list users', async () => {
    await render(<UserPage />);
    const userList = await screen.getByTestId('userList');
    expect(userList).toBeInTheDocument();
    expect(await screen.findByText('Antoni'));
    expect(await screen.findByText('+55 51 3626-2001'));
  });
});
