import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeService from 'modules/bicycles/services/BikeService';
import RegisterBikeForm from './RegisterBikeForm';

let defaultProps: any;

jest.mock('modules/bicycles/services/BikeService');

describe('RegisterUserForm', () => {
  beforeEach(() => {
    defaultProps = {
      communityId: 'my-id',
    };
  });

  it('should render correctly', async () => {
    render(<RegisterBikeForm {...defaultProps} />);

    expect(screen.getAllByRole('textbox')[0]).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')[1]).toBeInTheDocument();
    expect(screen.getByTestId('photo-thumbnail-path-test')).toBeInTheDocument();

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

    fireEvent.change(screen.getByTestId('photo-thumbnail-path-test'), {
      target: { files: [new File([], 'file.png')] },
    });

    fireEvent.input(screen.getAllByRole('textbox')[0], {
      target: { value: 'test' },
    });

    fireEvent.input(screen.getAllByRole('textbox')[1], {
      target: { value: 'test' },
    });

    fireEvent.input(screen.getByRole('spinbutton'), {
      target: { value: 123 },
    });

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
