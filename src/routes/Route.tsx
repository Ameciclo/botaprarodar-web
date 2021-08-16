import React, { Component } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, ...rest }) => {
  const user = false;
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
