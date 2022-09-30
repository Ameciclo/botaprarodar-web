import { BrowserRouter } from 'react-router-dom';
import { screen } from  '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import BikeConfirmationPage from './BikeConfirmationPage';

describe(' Render Community Selection Page', () => {
  renderWithRouterAndAuth(
    <BrowserRouter>
      <BikeConfirmationPage />
    </BrowserRouter>,
  );
  it('should render bike card and bike user card', async () => {
    const bikeCard = screen.getByTestId('bike-card');
    expect(bikeCard).toBeInTheDocument();

    const bikeUserCard = screen.getByTestId('bike-user-card');
    expect(bikeUserCard).toBeInTheDocument();
  });
  
});
