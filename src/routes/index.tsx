import React from 'react';
import { Switch } from 'react-router-dom';
import CommunityPage from '../pages/CommunityPage/CommunityPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import UserPage from '../pages/UserPage/UserPage';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashboardPage} />
    <Route path="/users" exact component={UserPage} />
    <Route path="/communities" component={CommunityPage} />
  </Switch>
);

export default Routes;
