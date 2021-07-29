import { render, screen } from '@testing-library/react';
import CommunityPage from './CommunityPage';

const defaultCommunities: [] = [];

describe('CommunityPage', () => {
  it('renders communities page without error', () => {
    const { container } = render(<CommunityPage props={defaultCommunities} />);
    expect(container).toBeInTheDocument();
  });

  it('renders a list to show the communities', () => {
    render(<CommunityPage props={defaultCommunities} />);
    const communitiesList = screen.getByTestId('communities-list');
    expect(communitiesList).toBeInTheDocument;
  });

  it('renders a list with two communities', () => {
    const newCommunities = [
      { name: 'First Community', description: '', address: 'Recife' },
      { name: 'Second Community', description: '', address: 'Rio de Janeiro' },
    ];
    render(<CommunityPage props={newCommunities} />);
    const communitiesList = screen.getByTestId('communities-list').childNodes;
    expect(communitiesList).toHaveLength(1);
  });
});
