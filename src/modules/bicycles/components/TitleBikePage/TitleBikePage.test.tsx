import { BrowserRouter } from 'react-router-dom';
import { act, screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import TitleBikePage from './TitleBikePage';

describe('TitleBikePage', () => {
  describe('when has state params', () => {
    it('should render correctly with title text', () => {
      const title = 'ABC';
      act(() => {
        renderWithRouterAndAuth(
          <BrowserRouter>
            <TitleBikePage title={title} />
          </BrowserRouter>,
        );
      });

      const card = screen.getByTestId('title-bike-page');
      expect(card).toBeInTheDocument();
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
