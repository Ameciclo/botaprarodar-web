import CommunityPage from './CommunityPage';
import { render, screen } from '@testing-library/react';

describe('CommunityPage', () => {
  it('renders communities page without error', () => {
    const { container } = render(<CommunityPage />);
    expect(container).toBeInTheDocument();
  });

  it('renders a list to show the communities', () => {
    render(<CommunityPage />);
    const communitiesList = screen.getByTestId('communities-list');
    expect(communitiesList).toBeInTheDocument;
  });
});
