import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeService from 'modules/bicycles/services/BikeService';
import RegisterBikeForm from './RegisterBikeForm';

let defaultProps: any;

jest.mock('modules/bicycles/services/BikeService');

jest.mock('./components/UploadImage', () => () => `UploadImage-mock`);
jest.mock(
  '../../../../../../shared/components/Input/Input',
  () => () => `Input-mock`,
);

describe('RegisterUserForm', () => {
  beforeEach(() => {
    defaultProps = {
      communityId: 'my-id',
    };
  });

  it('should render correctly', async () => {
    render(<RegisterBikeForm {...defaultProps} />);

    expect(screen.getAllByText('Input-mock')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Input-mock')[1]).toBeInTheDocument();
    expect(screen.getAllByText('Input-mock')[2]).toBeInTheDocument();
    expect(screen.getByText('UploadImage-mock')).toBeInTheDocument();

    expect(screen.getByText('CANCELAR')).toBeInTheDocument();
    expect(screen.getByText('CONCLUIR CADASTRO')).toBeInTheDocument();
  });

  it('should redirect after submit form', async () => {
    const spy = jest.spyOn(BikeService, 'createBike').mockResolvedValue(true);

    const { history } = renderWithRouterAndAuth(
      <RegisterBikeForm {...defaultProps} />,
      {
        route: '/comunidades/cadastrar-bicicleta',
      },
    );

    expect(history.location.pathname).toBe('/comunidades/cadastrar-bicicleta');

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
