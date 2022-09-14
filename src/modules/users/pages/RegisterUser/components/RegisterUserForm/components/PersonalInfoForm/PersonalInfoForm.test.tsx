import { act, fireEvent, render, screen } from '@testing-library/react';
import RegisterUserForm from '../../RegisterUserForm';

describe('PersonalInfoForm', () => {
  beforeEach(() => {
    render(<RegisterUserForm communityId="communityId" />);
  });
  it('should have all fields required', async () => {
    expect(screen.getByTestId('name-test')).toBeInTheDocument();
    expect(screen.getByTestId('address-test')).toBeInTheDocument();
    expect(screen.getByTestId('phone-test')).toBeInTheDocument();
  });

  it('should show error when submitting empty values', async () => {
    await act(async () => {
      fireEvent.click(screen.getByText('CONCLUIR CADASTRO'));
    });

    expect(
      screen.getByText('Nome do usuário é obrigatório'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Endereço do usuário é obrigatório'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Telefone do usuário é obrigatório'),
    ).toBeInTheDocument();
  });
});
