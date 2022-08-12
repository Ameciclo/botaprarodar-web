import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';
import { useGetAuth } from 'modules/authentication/contexts/AuthContext';

interface RouteProps extends ReactRouteProps {
  isPrivate: boolean;
  comp: React.ComponentType;
}

const Route = ({ isPrivate, comp: Component, ...rest }: RouteProps) => {
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
