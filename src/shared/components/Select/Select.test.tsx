import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select, { Props as SelectProps } from './Select';

describe('Component: Select', () => {
  let defaultProps: SelectProps;

  beforeEach(() => {
    defaultProps = {
      id: 'id',
      dataTestId: 'data-id',
      label: 'My Label',
      name: 'option',
      value: '',
      options: [
        { value: 'value-1', text: 'Text 1' },
        { value: 'value-2', text: 'Text 2' },
      ],
      onChange: jest.fn(),
    };
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<Select {...defaultProps} />);
    const { dataTestId, id, name } = defaultProps;

    const label = screen.getByTestId(`label-${dataTestId}`);
    const select = screen.getByTestId(`select-${dataTestId}`);
    const options = screen.getByRole('textbox', { hidden: true });
    const error = screen.queryByTestId(`error-${dataTestId}`);

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', `label-${id}`);

    expect(select).toBeInTheDocument();

    expect(options).toBeInTheDocument();
    expect(options).toHaveAttribute('name', name);

    expect(error).not.toBeInTheDocument();
  });

  it('should show feedback error', () => {
    const errorMessage = 'My error message';

    render(<Select {...defaultProps} error={errorMessage} />);

    const { dataTestId } = defaultProps;
    const label = screen.getByTestId(`label-${dataTestId}`);
    const errorWrapper = screen.getByTestId(`error-${dataTestId}`);
    const errorText = screen.getByText(errorMessage);

    expect(label).toHaveClass('Mui-error');
    expect(errorWrapper).toBeInTheDocument();
    expect(errorWrapper).toHaveClass('Mui-error');
    expect(errorText).toBeInTheDocument();
  });

  it('should show value correctly', () => {
    const { value, text } = defaultProps.options[0];
    render(<Select {...defaultProps} value={value} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should show all options when user click', async () => {
    render(<Select {...defaultProps} />);

    const { options } = defaultProps;
    const selectAction = screen.getByRole('button');

    userEvent.click(selectAction);

    options.forEach(option => {
      expect(screen.getByText(option.text)).toBeInTheDocument();
    });
  });

  it('should select option', async () => {
    const mockedOnChange = jest.fn();
    render(<Select {...defaultProps} onChange={mockedOnChange} />);

    const { options } = defaultProps;
    const textNotSelected = options[0].text;
    const textSelected = options[1].text;
    const selectAction = screen.getByRole('button');

    expect(screen.queryByText(textNotSelected)).not.toBeInTheDocument();
    expect(screen.queryByText(textSelected)).not.toBeInTheDocument();

    userEvent.click(selectAction);

    await waitFor(() =>
      userEvent.click(screen.getByRole('option', { name: textSelected })),
    );

    expect(screen.getByRole('button', { name: textSelected })).toBeVisible();
    expect(mockedOnChange).toHaveBeenCalled();
  });
});
