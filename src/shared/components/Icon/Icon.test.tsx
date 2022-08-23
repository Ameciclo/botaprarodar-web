import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Component: Icon', () => {
  it('should render correctly by name', () => {
    render(<Icon name="gear" description="Ícone para configurações" />);

    const componentId = screen.getByTestId('icon-gear');
    const componentAlt = screen.getByAltText('Ícone para configurações');

    expect(componentId).toBeInTheDocument();
    expect(componentAlt).toBeInTheDocument();
  });
});
