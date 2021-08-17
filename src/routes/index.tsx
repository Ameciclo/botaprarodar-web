import React from 'react';
import { Switch } from 'react-router-dom';
import UserDetailPage from 'pages/UserDetailPage/UserDetailPage';
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
      <Route path="/usuarios" exact comp={UserPage} />
      <Route path="/usuarios/:id" comp={UserDetailPage} />
      <Route path="/comunidades" comp={CommunityPage} />
    </Menu>
  </Switch>
);

export default Routes;
