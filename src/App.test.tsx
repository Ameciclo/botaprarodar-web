import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('modules/authentication/services/LoginService', () => {
  return {
    requestLogin: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

test('renders app without error', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
