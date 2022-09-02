import { render, screen } from '@testing-library/react';
import MotivationForm, { Props } from './MotivationForm';

describe('MotivationForm', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        alreadyUseBPR: 'No',
        alreadyUseBPROpenQuestion: '',
        reason: '',
      },
    };
  });

  it('should have default fields', async () => {
    render(<MotivationForm {...defaultProps} />);

    expect(
      screen.getByTestId('select-already-use-bpr-test'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('select-reason-test')).toBeInTheDocument();
  });
});
