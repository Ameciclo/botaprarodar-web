import React from 'react';
import { Switch } from 'react-router-dom';
import CommunityPage from '../pages/CommunityPage/CommunityPage';
import Login from '../pages/LoginPage/Login';
import UserPage from '../pages/UserPage/UserPage';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/users" exact component={UserPage} />
    <Route path="/comunidades" component={CommunityPage} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
