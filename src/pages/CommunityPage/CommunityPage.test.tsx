import { render, screen } from '@testing-library/react';
import CommunityPage from './CommunityPage';

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

  it('renders a list with two communities', () => {
    render(<CommunityPage />);
    const communitiesList = screen.getByTestId('communities-list').childNodes;
    expect(communitiesList).toHaveLength(0);
  });
});
