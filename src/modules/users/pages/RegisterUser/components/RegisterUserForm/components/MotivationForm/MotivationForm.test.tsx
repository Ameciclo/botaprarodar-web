import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MotivationForm, { Props } from './MotivationForm';

jest.mock('shared/components/Input/Input', () => () => `Input-component-mock`);

describe('MotivationForm', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      onChange: jest.fn(),
      control: jest.fn(),
      schema: {
        alreadyUseBPR: {},
        alreadyUseBPROpenQuestion: {},
        reason: {},
      },
      values: {
        alreadyUseBPR: 'No',
        alreadyUseBPROpenQuestion: '',
        reason: '',
      },
    };
  });

  it('should render correctly', async () => {
    render(<MotivationForm {...defaultProps} />);

    const title = screen.getByRole('heading', { name: /motivação/i });
    const input = screen.getByText('Input-component-mock');
    const select = screen.getByTestId('select-already-use-bpr-test');

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });

  it('should show additional option when selecting previous user of bikes', async () => {
    const { rerender } = render(<MotivationForm {...defaultProps} />);

    expect(screen.queryByText('Por quanto tempo?')).toBeFalsy();

    const view = screen.getByTestId('select-already-use-bpr-test');
    const select = within(view).getByRole('button');

    userEvent.click(select);

    await waitFor(() =>
      userEvent.click(screen.getByRole('option', { name: 'Sim' })),
    );

    expect(screen.getByRole('button', { name: 'Sim' })).toBeVisible();

    await rerender(
      <MotivationForm {...defaultProps} values={{ alreadyUseBPR: 'Yes' }} />,
    );

    expect(
      screen.queryAllByText('Input-component-mock').length,
    ).toBeGreaterThanOrEqual(2);
  });

  it('should not show additional option when selecting no previous user of bikes', async () => {
    const { rerender } = render(<MotivationForm {...defaultProps} />);

    expect(screen.queryByText('Por quanto tempo?')).toBeFalsy();

    const view = screen.getByTestId('select-already-use-bpr-test');
    const select = within(view).getByRole('button');

    userEvent.click(select);

    await waitFor(() =>
      userEvent.click(screen.getByRole('option', { name: 'Não' })),
    );

    expect(screen.getByRole('button', { name: 'Não' })).toBeVisible();

    await rerender(
      <MotivationForm {...defaultProps} values={{ alreadyUseBPR: 'No' }} />,
    );

    expect(
      screen.queryAllByText('Input-component-mock').length,
    ).toBeGreaterThanOrEqual(1);
  });
});
