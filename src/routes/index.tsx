import React from 'react';
import { Switch } from 'react-router-dom';
import UserDetailPage from 'pages/UserDetailPage/UserDetailPage';
import EditCommunityPage from 'pages/EditCommunityPage/EditCommunityPage';
import CommunityPage from '../pages/CommunityPage/CommunityPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserPage from '../pages/UserPage/UserPage';
import Route from './Route';
import Menu from '../components/Menu/Menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" comp={LoginPage} />
    <Menu>
      <Route path="/" exact comp={DashboardPage} />
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
