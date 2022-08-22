import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import RegisterUserForm from '../../RegisterUserForm';
import ProblemsForm, { ProblemsFormProps } from './ProblemsForm';

jest.mock('shared/components/Input/Input', () => () => `Input-component-mock`);

describe('ProblemsForm', () => {
  let defaultProps: ProblemsFormProps;

  beforeEach(() => {
    defaultProps = {
      onChange: jest.fn(),
      control: jest.fn(),
      values: {
        collision: 'No',
        problems: '',
        timeToArrive: '',
      },
    };
  });

  it('should have all fields required', async () => {
    render(<ProblemsForm {...defaultProps} />);

    expect(
      screen.queryAllByText('Input-component-mock').length,
    ).toBeGreaterThanOrEqual(2);
    expect(screen.getByTestId('select-collision-test')).toBeInTheDocument();
  });
});
