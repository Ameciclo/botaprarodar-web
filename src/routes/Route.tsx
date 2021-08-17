import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  comp: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  comp: Component,
  ...rest
}) => {
  const user = true;
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
