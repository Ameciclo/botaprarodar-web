import React from 'react';
import { Switch } from 'react-router-dom';
import UserDetailPage from 'modules/users/pages/UserDetailPage/UserDetailPage';
import EditCommunityPage from 'modules/communities/pages/EditCommunityPage/EditCommunityPage';
import CommunityPage from '../modules/communities/pages/CommunityPage/CommunityPage';
import DashboardPage from '../modules/dashboard/pages/DashboardPage/DashboardPage';
import LoginPage from '../modules/authentication/pages/LoginPage/LoginPage';
import UserPage from '../modules/users/pages/UserPage/UserPage';
import Route from './Route';
import Menu from '../shared/components/Menu/Menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" isPrivate={false} comp={LoginPage} />
    <Menu>
      <Route path="/" isPrivate exact comp={DashboardPage} />
      <Route path="/usuarios" exact isPrivate comp={UserPage} />
      <Route path="/usuarios/:id" isPrivate comp={UserDetailPage} />
      <Route path="/comunidades" exact isPrivate comp={CommunityPage} />
      <Route
        path="/comunidades/editar/:id"
        isPrivate
        comp={EditCommunityPage}
      />
    </Menu>
  </Switch>
);

export default Routes;
