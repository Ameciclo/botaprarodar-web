import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import { MockedFirstUser } from 'modules/users/mocks/MockedUser';
import { mockedBike } from 'modules/bicycles/mocks/BikeMocks';
import BikeUserCard from 'modules/bicycles/components/BikeUserCard/BikeUserCard';
import BikeCard from 'modules/bicycles/components/BikeCard/BikeCard';
import BikeConfirmationCards from './BikeConfirmationCards';

const mockUser = MockedFirstUser;

const bikeMock = mockedBike({
  communityId: '-MLy8y1-5v5GLg7Z428y',
  orderNumber: 12345,
  name: 'Bike 14455 he',
  serialNumber: '12345',
});

describe(' Render Community Selection Page', () => {
  renderWithRouterAndAuth(
    <BrowserRouter>
      <BikeConfirmationCards />
    </BrowserRouter>,
  );

  it('should render bike card and bike user card', async () => {
    renderWithRouterAndAuth(
      <BrowserRouter>
        <BikeUserCard
          profilePicture={mockUser.profilePicture}
          name={mockUser.name}
          telephone={mockUser.telephone}
        />
      </BrowserRouter>,
    );
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.telephone)).toBeInTheDocument();

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

    expect(
      screen.getByText(`ORDEM: ${bikeMock.orderNumber}`),
    ).toBeInTheDocument();
    expect(screen.getByText(bikeMock.name)).toBeInTheDocument();
    expect(
      screen.getByText(`SÉRIE: ${bikeMock.serialNumber}`),
    ).toBeInTheDocument();
  });
});
