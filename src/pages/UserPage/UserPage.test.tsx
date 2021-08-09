// Qual o foco? Listar os usuários
// O que eu preciso saber? Listar os usuários
// O que eu espero? Uma tabela com a lista de usuários contento seu nome, e-mail, comunidade, status e ações
import { render, screen } from '@testing-library/react';
import UserService from '../../services/UserService/UserService';
import UserPage from './UserPage';

describe('UserPage', () => {
  beforeEach(() => {
    jest.spyOn(UserService, 'getAllUsers').mockResolvedValue([
      {
        name: 'Antoni',
        communityId: '-MLDOXs3p35DEHg0gdUU',
        telephone: '+55 51 3626-2001',
        status: true,
      },
    ]);
    // jest.mock('firebase/app', () => {
    //   const data = [
    //     {
    //       name: 'Antoni',
    //       communityId: '-MLDOXs3p35DEHg0gdUU',
    //       telephone: '+55 51 3626-2001',
    //       status: true,
    //     },
    //   ];
    //   const snapshot = { val: () => data };
    //   return {
    //     initializeApp: jest.fn().mockReturnValue({
    //       database: jest.fn().mockReturnValue({
    //         ref: jest.fn().mockReturnThis(),
    //         once: jest.fn(() => Promise.resolve(snapshot)),
    //       }),
    //     }),
    //   };
    // });
  });

  it('should list users', async () => {
    await render(<UserPage />);
    const userList = await screen.getByTestId('userList');
    expect(userList).toBeInTheDocument();
    expect(await screen.findByText('Antoni'));
    // expect(await screen.findByText('123456'));
  });
});
