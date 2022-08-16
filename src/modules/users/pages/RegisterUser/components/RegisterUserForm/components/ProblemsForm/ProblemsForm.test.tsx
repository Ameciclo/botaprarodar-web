import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import RegisterUserForm from '../../RegisterUserForm';

describe('ProblemsForm', () => {
  it('should have all fields required', async () => {
    render(<RegisterUserForm />);

    expect(screen.getByTestId('time-to-arrive-test')).toBeInTheDocument();
    expect(screen.getByTestId('problems-test')).toBeInTheDocument();
    expect(screen.getByTestId('been-collision-test')).toBeInTheDocument();
  });

  it('should show error when submitting empty values', async () => {
    const { getByText } = renderWithRouterAndAuth(<RegisterUserForm />);

    await act(async () => {
      fireEvent.click(getByText('CONCLUIR CADASTRO'));
    });

    expect(
      screen.getByText('Citar problemas é obrigatório'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Informar o tempo é obrigatório'),
    ).toBeInTheDocument();
  });
});
