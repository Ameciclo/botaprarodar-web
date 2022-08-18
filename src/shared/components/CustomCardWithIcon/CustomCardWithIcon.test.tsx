import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomCardWithIcon, { Props } from './CustomCardWithIcon';

jest.mock('../Icon/Icon', () => () => 'Icon-component-mock');

describe('Component: CustomCardWithIcon', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      id: 'my-id',
      text: 'My Text',
      iconName: 'giveBackBike',
      iconDescription: 'Teste',
    };
  });

  it('should render correctly', () => {
    render(<CustomCardWithIcon {...defaultProps} />);

    const title = screen.getByRole('heading', { name: /My Text/i });
    const icon = screen.getByText('Icon-component-mock');

    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('data-testid', 'my-id');

    expect(icon).toBeInTheDocument();
  });

  it('should render correctly with link', () => {
    const onClick = jest.fn();

    render(<CustomCardWithIcon {...defaultProps} onClick={onClick} />);

    const { id } = defaultProps;
    const action = screen.getByTestId(`card-action-${id}`);

    userEvent.click(action);
    expect(onClick).toHaveBeenCalled();
  });
});
