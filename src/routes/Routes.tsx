import React from 'react';
import { Switch } from 'react-router-dom';
import LoginPage from '../modules/authentication/pages/LoginPage/LoginPage';
import Menu from '../shared/components/Menu/Menu';
import Route from './Route';
import { routes } from './routesCoordinator';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" isPrivate={false} comp={LoginPage} />
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
