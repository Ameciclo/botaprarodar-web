import React from 'react';
import { Switch } from 'react-router-dom';
import { Login } from 'modules/authentication/pages';
import { Menu } from 'shared/components';
import Route from './Route';
import { routes } from './routesCoordinator';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" isPrivate={false} comp={Login} />
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
