import { render, screen } from '@testing-library/react';
import Community from './Community';

const defaultProps = {
  name: 'First Community',
  description: 'community description',
  address: 'Recife',
};

test('renders without error', () => {
  const { container } = render(<Community {...defaultProps} />);
  expect(container).toBeInTheDocument;
});

test('renders community name', () => {
  const newCommunity = {
    name: 'Sample Community',
    description: 'Community Description',
    address: 'Recife',
  };
  const container = render(<Community {...newCommunity} />);
  const communityName = container.queryByTestId('community-name');
  expect(communityName.textContent).toEqual('Nome: Sample Community');
});
