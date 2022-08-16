import { render, screen } from '@testing-library/react';
import MotivationForm from './MotivationForm';

jest.mock('shared/components/Input/Input', () => () => `Input-component-mock`);

jest.mock(
  'shared/components/Select/Select',
  () => () => `Select-component-mock`,
);

describe('MotivationForm', () => {
  it('should render correctly', async () => {
    const props = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        motivation: 'Yes',
      },
    };

    render(<MotivationForm {...props} />);

    const title = screen.getByRole('heading', { name: /motivação/i });
    const input = screen.getByText('Input-component-mock');
    const select = screen.getByText('Select-component-mock');

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });
});
