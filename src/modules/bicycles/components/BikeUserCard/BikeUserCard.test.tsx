import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { MockedFirstUser } from 'modules/users/mocks/MockedUser';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeUserCard from './BikeUserCard';

jest.mock('modules/users/services/UserService');

const mockUser = MockedFirstUser;

describe('User Card', () => {
  renderWithRouterAndAuth(
    <BrowserRouter>
      <BikeUserCard />
    </BrowserRouter>,
  );
  it('renders User Card without props', () => {
    const bikeUserCard = screen.getByTestId('bike-user-card');
    expect(bikeUserCard).toBeInTheDocument();
  });

  it('renders User Card with props', () => {
    renderWithRouterAndAuth(
      <BrowserRouter>
        <BikeUserCard
          profilePicture={mockUser.profilePicture}
          name={mockUser.name}
          telephone={mockUser.telephone}
        />
      </BrowserRouter>,
    );
    const bikeUserCard = screen.getByTestId('bike-user-card');
    expect(bikeUserCard).toBeInTheDocument();
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.telephone)).toBeInTheDocument();
  });
});
