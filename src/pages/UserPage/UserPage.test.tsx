// Qual o foco? Listar os usuários
// O que eu preciso saber? Listar os usuários
// O que eu espero? Uma tabela com a lista de usuários contento seu nome, e-mail, comunidade, status e ações
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import api from '../../services/api';
import UserPage from './UserPage';

// const mockedAxios = api as jest.Mocked<typeof axios>;

describe('UserPage', () => {
  it('should list users', async () => {
    jest.mock('../../services/api', () => {
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

    await render(<UserPage />);

    const userList = await screen.getByTestId('userList');

    expect(userList).toBeInTheDocument();
    expect(await screen.findByText('Antoni'));
    expect(await screen.findByText('+55 51 3626-2001'));
  });
});
