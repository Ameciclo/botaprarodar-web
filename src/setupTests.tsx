// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AuthInterface from './models/Auth/AuthInterface';

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
  Pie: () => null,
}));

beforeEach(() => {
  const INITIAL_AUTH: AuthInterface = {
    token: '',
    authenticated: false,
    email: '',
    displayName: '',
  };
  localStorage.setItem('authStorage', JSON.stringify(INITIAL_AUTH));
});

export function setUserAuthentication() {
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
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(
      <AuthProvider>
        <Router history={history}>{uiComponent}</Router>
      </AuthProvider>,
    ),
    history,
  };
}
