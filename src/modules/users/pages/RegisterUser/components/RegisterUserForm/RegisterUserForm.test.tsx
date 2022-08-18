import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import RegisterUserForm from './RegisterUserForm';

describe('RegisterUserForm', () => {
  it('should render sections and buttons for registering users', async () => {
    render(<RegisterUserForm />);
    expect(screen.getByText('Informações pessoais')).toBeInTheDocument();
    expect(screen.getByText('Dados sociais')).toBeInTheDocument();
    expect(screen.getByText('Motivação')).toBeInTheDocument();
    expect(screen.getByText('Dificuldades e problemas')).toBeInTheDocument();
    expect(screen.getByText('CANCELAR')).toBeInTheDocument();
    expect(screen.getByText('CONCLUIR CADASTRO')).toBeInTheDocument();
  });

  it('should redirect to home after submit form', async () => {
    const { getByText, history } = renderWithRouterAndAuth(
      <RegisterUserForm />,
    );

    await act(async () => {
      fireEvent.click(getByText('CONCLUIR CADASTRO'));
    });

    expect(history.location.pathname).toBe('/');
  });
});
