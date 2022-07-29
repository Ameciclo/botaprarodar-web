import { render, screen } from '@testing-library/react';
import RegisterUserForm from './RegisterUserForm';

describe('RegisterUserForm', () => {
  beforeEach(() => {
    render(<RegisterUserForm />);
  });

  it('should render sections for registering users', async () => {
    expect(screen.getByText('Informações pessoais')).toBeInTheDocument();
    expect(screen.getByText('Dados sociais')).toBeInTheDocument();
    expect(screen.getByText('Motivação')).toBeInTheDocument();
    expect(screen.getByText('Dificuldades e problemas')).toBeInTheDocument();
  });
});
