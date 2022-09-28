import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReasonEnum } from 'modules/users/models/enums';
import MotivationForm, { Props } from './MotivationForm';

jest.mock('shared/components/Input/Input', () => () => `Input-component-mock`);

describe('MotivationForm', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        alreadyUseBPR: 'No',
        motivationOpenQuestion: '',
        motivation: 'Porque começou a trabalhar com entregas.',
      },
    };
  });

  it('should have default fields', async () => {
    render(<MotivationForm {...defaultProps} />);

    expect(
      screen.getByTestId('select-already-use-bpr-test'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('select-motivation-test')).toBeInTheDocument();
  });

  it('should show additional option when selecting other', async () => {
    const { rerender } = render(<MotivationForm {...defaultProps} />);

    const view = screen.getByTestId('select-motivation-test');
    const select = within(view).getByRole('button', {
      name: /porque começou a trabalhar com entregas\./i,
    });

    expect(
      screen.getByText(
        'Por que a usuária começou a usar a bicicleta como meio de transporte?',
      ),
    ).toBeVisible();
    userEvent.click(select);
    await waitFor(() =>
      userEvent.click(screen.getByRole('option', { name: ReasonEnum.Other })),
    );

    expect(
      screen.getByRole('button', { name: ReasonEnum.Other }),
    ).toBeVisible();
    await rerender(
      <MotivationForm
        {...defaultProps}
        values={{
          alreadyUseBPR: 'Yes',
          motivationOpenQuestion: '',
          motivation: 'Outro',
        }}
      />,
    );

    expect(screen.queryAllByText('Input-component-mock')).toHaveLength(1);
  });
});
