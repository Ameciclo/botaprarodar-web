import { render, screen } from '@testing-library/react';
import RegisterUserForm from '../../RegisterUserForm';

describe('SocialInfoForm', () => {
  it('should have all fields required', async () => {
    render(<RegisterUserForm />);

    expect(screen.getByTestId('gender-test')).toBeInTheDocument();
    expect(screen.getByTestId('race-test')).toBeInTheDocument();
    expect(screen.getByTestId('schooling-test')).toBeInTheDocument();
    expect(screen.getByTestId('income-test')).toBeInTheDocument();
  });
});
