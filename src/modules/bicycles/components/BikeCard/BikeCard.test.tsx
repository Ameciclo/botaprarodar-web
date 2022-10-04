import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import BikeService from 'modules/bicycles/services/BikeService';
import { renderWithRouterAndAuth } from 'setupTests';
import { mockedBike } from '../../mocks/BikeMocks';
import BikeCard from './BikeCard';

jest.mock('modules/bicycles/services/BikeService');

const mockedBikeService = BikeService as jest.Mocked<typeof BikeService>;

const bikeMock = mockedBike();

describe('User Card', () => {
  renderWithRouterAndAuth(
    <BrowserRouter>
      <BikeCard />
    </BrowserRouter>,
  );

  it('renders Bike Card without props', () => {
    const bikeCard = screen.getByTestId('bike-card');
    expect(bikeCard).toBeInTheDocument();
  });

  it('renders Bike Card with props', () => {
    mockedBikeService.getAllBikes.mockResolvedValue([]);

    renderWithRouterAndAuth(
      <BrowserRouter>
        <BikeCard
          imagePath={bikeMock.photoThumbnailPath}
          orderNumber={bikeMock.orderNumber}
          name={bikeMock.name}
          serialNumber={bikeMock.serialNumber}
          key={bikeMock.name}
        />
      </BrowserRouter>,
    );

    const bikeCard = screen.getByTestId('bike-card');
    expect(bikeCard).toBeInTheDocument();

    expect(
      screen.getByText(`ORDEM: ${bikeMock.orderNumber}`),
    ).toBeInTheDocument();
    expect(screen.getByText(bikeMock.name)).toBeInTheDocument();
    expect(
      screen.getByText(`SÉRIE: ${bikeMock.serialNumber}`),
    ).toBeInTheDocument();
  });
});
