import { render, screen } from '@testing-library/react';
import CommunityPage from './CommunityPage';

describe('CommunityPage', () => {
  it('renders communities page without error', () => {
    const { container } = render(<CommunityPage />);
    expect(container).toBeInTheDocument();
  });

  it('renders a grid to show the communities', () => {
    render(<CommunityPage />);
    const communitiesList = screen.getByTestId('communities-grid');
    expect(communitiesList).toBeInTheDocument();
  });
});
