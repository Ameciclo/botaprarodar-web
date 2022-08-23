import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import UserService from 'modules/users/services/UserService';
import RegisterUserForm, { Props } from './RegisterUserForm';

let defaultProps: Props;

jest.mock('modules/users/services/UserService');
jest.mock(
  './components/PersonalInfoForm/PersonalInfoForm',
  () => () => `PersonalInfoForm-mock`,
);
jest.mock(
  './components/SocialInfoForm/SocialInfoForm',
  () => () => `SocialInfoForm-mock`,
);
jest.mock(
  './components/ProblemsForm/ProblemsForm',
  () => () => `ProblemsForm-mock`,
);
jest.mock(
  './components/MotivationForm/MotivationForm',
  () => () => `MotivationForm-mock`,
);

describe('RegisterUserForm', () => {
  beforeEach(() => {
    defaultProps = {
      communityId: 'my-id',
    };
  });

  it('should render correctly', async () => {
    render(<RegisterUserForm {...defaultProps} />);

    expect(screen.getByText('PersonalInfoForm-mock')).toBeInTheDocument();
    expect(screen.getByText('SocialInfoForm-mock')).toBeInTheDocument();
    expect(screen.getByText('ProblemsForm-mock')).toBeInTheDocument();
    expect(screen.getByText('MotivationForm-mock')).toBeInTheDocument();

    expect(screen.getByText('CANCELAR')).toBeInTheDocument();
    expect(screen.getByText('CONCLUIR CADASTRO')).toBeInTheDocument();
  });

  it('should redirect after submit form', async () => {
    const spy = jest.spyOn(UserService, 'createUser').mockResolvedValue(true);

    const { history } = renderWithRouterAndAuth(
      <RegisterUserForm {...defaultProps} />,
      {
        route: '/comunidades/cadastrar-usuario',
      },
    );

    expect(history.location.pathname).toBe('/comunidades/cadastrar-usuario');

    const button = screen.getByRole('button', { name: /concluir cadastro/i });

    await act(async () => {
      await fireEvent.click(button);
    });

    expect(spy).toHaveBeenCalled();
    const { communityId } = defaultProps;

    expect(history.location.pathname).toBe(
      `/comunidades/gerenciador-de-comunidade/${communityId}`,
    );
  });
});
