import { render, screen } from '@testing-library/react';
import TravelTimeCard from './TravelTimeCard';

it('should render travel time card', () => {
  const mockTravelTime = [10, 20, 30.5557];
  const { container } = render(<TravelTimeCard travelTime={mockTravelTime} />);
  expect(container).toBeInTheDocument();
  expect(screen.getByText('60.56')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(
    screen.getByText('Em média, são 20 minutos por viagem'),
  ).toBeInTheDocument();
});
