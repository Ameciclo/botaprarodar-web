import { render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('Dashboard Page', () => {
  it('Should render Dashboard page', async () => {
    const { container } = render(<DashboardPage />);
    expect(container).toBeInTheDocument();
  });
});
