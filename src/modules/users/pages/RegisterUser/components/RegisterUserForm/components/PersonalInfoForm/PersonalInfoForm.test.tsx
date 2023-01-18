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

  it('should show error when submitting only empty spaces in name input', async () => {
    const leadingEmptySpaceinputText = '    ';
    const nameField = await screen.findByTestId('name-test');

    fireEvent.change(nameField, {
      target: { value: leadingEmptySpaceinputText },
    });

    await act(async () => {
      fireEvent.click(screen.getByText('CONCLUIR CADASTRO'));
    });

    expect(
      screen.getByText('Este campo não pode ser vazio'),
    ).toBeInTheDocument();
  });

  it('should show error when submitting only empty spaces in address input', async () => {
    const leadingEmptySpaceinputText = '    ';
    const addressField = await screen.findByTestId('address-test');

    fireEvent.change(addressField, {
      target: { value: leadingEmptySpaceinputText },
    });

    await act(async () => {
      fireEvent.click(screen.getByText('CONCLUIR CADASTRO'));
    });

    expect(
      screen.getByText('Este campo não pode ser vazio'),
    ).toBeInTheDocument();
  });
});
