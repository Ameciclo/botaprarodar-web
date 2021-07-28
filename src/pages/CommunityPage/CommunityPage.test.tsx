import CommunityPage from './CommunityPage';
import { render, screen } from '@testing-library/react';

describe('CommunityPage', () => {
  it('renders communities page without error', () => {
    const { container } = render(<CommunityPage />);
    expect(container).toBeInTheDocument();
  });
});
