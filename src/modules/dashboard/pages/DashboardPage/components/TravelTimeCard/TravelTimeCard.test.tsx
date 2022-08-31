import { render, screen } from '@testing-library/react';
import TravelTimeCard from './TravelTimeCard';

describe('Travel Time Cards', () => {
  it('should render travel time card', () => {
    const mockTravelTime = [10, 20, 30.65];
    const { container } = render(
      <TravelTimeCard travelTime={mockTravelTime} />,
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText('1.01')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(
      screen.getByText('Em média, são 0.33 horas por viagem'),
    ).toBeInTheDocument();
  });
});
