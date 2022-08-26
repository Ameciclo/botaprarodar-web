import { render, screen } from '@testing-library/react';
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
});
