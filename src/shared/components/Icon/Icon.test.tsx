import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Component: Icon', () => {
  it('shoud render correctly by name', () => {
    render(<Icon name="gear" />);

    const component = screen.getByTestId('icon-gear');

    expect(component).toBeInTheDocument();
  });
});
