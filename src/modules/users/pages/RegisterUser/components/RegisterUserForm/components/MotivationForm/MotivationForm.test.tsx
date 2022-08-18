import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MotivationForm from './MotivationForm';

jest.mock('shared/components/Input/Input', () => () => `Input-component-mock`);

describe('MotivationForm', () => {
  it('should render correctly', async () => {
    const props = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        alreadyUseBPR: '',
      },
    };

    render(<MotivationForm {...props} />);

    const title = screen.getByRole('heading', { name: /motivação/i });
    const input = screen.getByText('Input-component-mock');
    const select = screen.getByTestId('select-already-use-bpr-test');

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });

  it('should show additional option when selecting previous user of bikes', async () => {
    const props = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        alreadyUseBPR: '',
      },
    };
    const { rerender } = render(<MotivationForm {...props} />);

    const view = screen.getByTestId('select-already-use-bpr-test');
    const select = within(view).getByRole('button');
    expect(screen.queryByText('Por quanto tempo?')).toBeFalsy();

    userEvent.click(select);
    await waitFor(() =>
      userEvent.click(screen.getByRole('option', { name: 'Sim' })),
    );

    expect(screen.getByRole('button', { name: 'Sim' })).toBeVisible();
    await rerender(
      <MotivationForm {...props} values={{ alreadyUseBPR: 'Yes' }} />,
    );
    expect(
      screen.queryAllByText('Input-component-mock').length,
    ).toBeGreaterThanOrEqual(2);
  });

  it('should not show additional option when selecting no previous user of bikes', async () => {
    const props = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        alreadyUseBPR: '',
      },
    };
    const { rerender } = render(<MotivationForm {...props} />);

    const view = screen.getByTestId('select-already-use-bpr-test');
    const select = within(view).getByRole('button');
    expect(screen.queryByText('Por quanto tempo?')).toBeFalsy();

    userEvent.click(select);
    await waitFor(() =>
      userEvent.click(screen.getByRole('option', { name: 'Não' })),
    );

    expect(screen.getByRole('button', { name: 'Não' })).toBeVisible();
    await rerender(
      <MotivationForm {...props} values={{ alreadyUseBPR: 'Não' }} />,
    );
    expect(
      screen.queryAllByText('Input-component-mock').length,
    ).toBeGreaterThanOrEqual(1);
  });
});
