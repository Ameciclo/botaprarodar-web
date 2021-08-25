import { useGetAuth } from 'modules/authentication/contexts/AuthContext';
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
  const { value } = useGetAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate && !value?.authenticated ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default Route;
