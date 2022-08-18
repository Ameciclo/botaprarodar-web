import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndAuth } from '../../../../setupTests';
import LoginPage from './Login';

import 'shared/components/Logo/Logo';

describe('Page: Login', () => {
  it('should render correctly', () => {
    renderWithRouterAndAuth(<LoginPage />, {
      route: '/login',
    });

    screen.debug();
  });
});
