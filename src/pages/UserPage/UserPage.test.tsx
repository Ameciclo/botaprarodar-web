// Qual o foco? Listar os usuários
// O que eu preciso saber? Listar os usuários
// O que eu espero? Uma tabela com a lista de usuários contento seu nome, e-mail, comunidade, status e ações
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserPage from './UserPage';

describe('UserPage', () => {
  it('should list users', () => {
    render(<UserPage />);
    const userTable = screen.findByTestId('user-table');
    const tableName = screen.findByText('NOME');
    const tableEmail = screen.findByText('E-MAIL');
    const tableComunity = screen.findByText('COMUNIDADE');
    const tableStatus = screen.findByText('STATUS');
    const tableActions = screen.findByText('AÇÕES');

    expect(userTable).toBeInTheDocument();
    expect(tableName).toBeInTheDocument();
    expect(tableEmail).toBeInTheDocument();
    expect(tableComunity).toBeInTheDocument();
    expect(tableStatus).toBeInTheDocument();
    expect(tableActions).toBeInTheDocument();
  });
});
