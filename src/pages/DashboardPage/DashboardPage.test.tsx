import { render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('Login Page', () => {
  it('Should render login page', async () => {
    const { container } = render(<DashboardPage />);
    expect(container).toBeInTheDocument();
  });
});
