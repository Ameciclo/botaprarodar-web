/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { AuthProvider } from './modules/authentication/contexts/AuthContext';
import AuthInterface from './modules/authentication/models/AuthInterface';

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Pie: () => null,
}));

beforeEach(() => {
  const INITIAL_AUTH: AuthInterface = {
    token: '',
    authenticated: false,
    email: '',
    displayName: ' ',
  };
  localStorage.setItem('authStorage', JSON.stringify(INITIAL_AUTH));
});

// eslint-disable-next-line react/display-name
export const mockedComponent = (ComponentName: string) => (props: any) => {
  const ComponentMoked = <ComponentName {...props} />;

  return ComponentMoked;
};

export function setUserAuthenticated() {
  const mockedUser: AuthInterface = {
    token: 'token',
    authenticated: true,
    email: 'email@example.com',
    displayName: 'John Smith',
  };
  localStorage.setItem('authStorage', JSON.stringify(mockedUser));
}

export function renderWithRouterAndAuth(
  uiComponent: React.ReactElement,
  {
    route = '/',
    stateParams = {},
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  history.push(route, stateParams);

  return {
    ...render(
      <AuthProvider>
        <Router history={history}>{uiComponent}</Router>
      </AuthProvider>,
    ),
    history,
  };
}
