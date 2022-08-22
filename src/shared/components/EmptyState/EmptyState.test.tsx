import { render, screen } from '@testing-library/react';
import EmptyState, { Props } from './EmptyState';

describe('Component: EmptyState', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      imgSrc: 'image-url',
      heading: 'Title',
      subheading: 'Sub title',
    };
  });

  it('should render correctly', () => {
    render(<EmptyState {...defaultProps} />);

    const { heading, subheading, imgSrc } = defaultProps;

    const id = screen.getByTestId('empty-state');
    const image = screen.getByRole('img');
    const title = screen.getByRole('heading', { name: heading });
    const subTitle = screen.getByRole('heading', { name: subheading });

    expect(id).toBeInTheDocument();

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'ciclistas');
    expect(image).toHaveAttribute('src', imgSrc);
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
