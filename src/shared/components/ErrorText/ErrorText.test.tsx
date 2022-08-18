import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import ErrorText, { Props } from './ErrorText';

describe('Component: ErrorText', () => {
  let defaultProps: Props;

  it('should render correctly', () => {
    defaultProps = {
      id: faker.random.word(),
      text: faker.random.words(),
    };

    render(<ErrorText {...defaultProps} />);

    const id = screen.getByTestId(defaultProps.id);
    const text = screen.getByText(defaultProps.text);

    expect(id).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
