import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import RegisterUserForm from '../../RegisterUserForm';

describe('MotivationForm', () => {
  it('should have all fields required', async () => {
    render(<RegisterUserForm />);

    expect(screen.getByTestId('reason-test')).toBeInTheDocument();
    expect(screen.getByTestId('motivation-test')).toBeInTheDocument();
    expect(screen.getByTestId('used-bycicle-test')).toBeInTheDocument();
  });

  it('should show error when submitting empty values', async () => {
    const { getByText, history } = renderWithRouterAndAuth(
      <RegisterUserForm />,
    );

    await act(async () => {
      fireEvent.click(getByText('CONCLUIR CADASTRO'));
    });

    expect(
      screen.getByText('A motivação do uso é obrigatória'),
    ).toBeInTheDocument();
  });
});
