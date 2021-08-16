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
    <Route path="/login" component={LoginPage} />
    <Menu>
      <Route path="/" exact component={DashboardPage} />
      <Route path="/usuarios" exact component={UserPage} />
      <Route path="/usuarios/:id" component={UserDetailPage} />
      <Route path="/comunidades" component={CommunityPage} />
    </Menu>
  </Switch>
);

export default Routes;
