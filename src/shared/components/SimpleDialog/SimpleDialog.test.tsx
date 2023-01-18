import { render, screen } from '@testing-library/react';
import SimpleDialog from './SimpleDialog';

describe('Simple Dialog', () => {
  it('should render Dialog correctly', () => {
    render(
      <SimpleDialog
        open
        title="title"
        content="Lorem Ipsum"
        onClose={() => jest.fn()}
      />,
    );

    const wrapper = screen.getByTestId('dialog');

    expect(wrapper).toBeInTheDocument();
  });
});
