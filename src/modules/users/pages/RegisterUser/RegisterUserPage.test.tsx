import { fireEvent } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import RegisterUserPage from './RegisterUserPage';

describe('RegisterUserPage', () => {
  it('should render component', async () => {
    const wrapper = renderWithRouterAndAuth(<RegisterUserPage />, {
      route: '/comunidades/cadastrar-usuario',
    });
    expect(wrapper.container).toBeInTheDocument();
  });

  it('should redirect to home when clicking back', async () => {
    const { getByText, history } = renderWithRouterAndAuth(
      <RegisterUserPage />,
    );

    fireEvent.click(getByText('Cadastrar usuário'));

    expect(history.location.pathname).toBe('/');
  });
});
