import EditCommunityPage from 'modules/communities/pages/EditCommunityPage/EditCommunityPage';
import UserDetailPage from 'modules/users/pages/UserDetailPage/UserDetailPage';
import React from 'react';
import { Switch } from 'react-router-dom';
import LoginPage from '../modules/authentication/pages/LoginPage/LoginPage';
import CommunityPage from '../modules/communities/pages/CommunityPage/CommunityPage';
import DashboardPage from '../modules/dashboard/pages/DashboardPage/DashboardPage';
import UserPage from '../modules/users/pages/UserPage/UserPage';
import Menu from '../shared/components/Menu/Menu';
import Route from './Route';

const Routes: React.FC = () => {
  const routes = [
    {
      path: '/',
      comp: DashboardPage,
      private: false,
    },
    {
      path: '/usuarios',
      comp: UserPage,
      private: true,
    },
    {
      path: '/usuarios/:id',
      comp: UserDetailPage,
      private: true,
    },
    {
      path: '/comunidades',
      comp: CommunityPage,
      private: true,
    },
    {
      path: '/comunidades/editar/:id',
      comp: EditCommunityPage,
      private: true,
    },
    {
      path: '/comunidades/criar',
      comp: EditCommunityPage,
      private: true,
    },
  ];

  return (
    <Switch>
      <Route path="/login" isPrivate={false} comp={LoginPage} />
      <Menu>
        {routes.map(route => (
          <Route
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
