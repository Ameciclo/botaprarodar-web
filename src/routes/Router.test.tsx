import { render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { CommunityPage } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import Route from './Route';

const history = createMemoryHistory({ initialEntries: ['/'] });

xit('should ', async () => {
  render(
    <BrowserRouter>
      <Route path="/comunidades" comp={CommunityPage} />
    </BrowserRouter>,
  );

  await waitFor(() => expect(history.location.pathname).toBe('/login'));
});
