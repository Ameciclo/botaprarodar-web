import React from 'react';
import { Switch } from 'react-router-dom';
import PasswordResetPage from 'modules/authentication/pages/PasswordResetPage/PasswordResetPage';
import LoginPage from '../modules/authentication/pages/LoginPage/LoginPage';
import Menu from '../shared/components/Menu/Menu';
import Route from './Route';
import { routes } from './routesCoordinator';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" isPrivate={false} comp={LoginPage} />
      <Route
        path="/esqueci-minha-senha"
        isPrivate={false}
        comp={PasswordResetPage}
      />
      <Menu>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            isPrivate={route.private}
            exact
            comp={route.comp}
          />
        ))}
      </Menu>
    </Switch>
  );
};

export default Routes;
