import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import TemplatePage from './templatePage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/users" exact component={TemplatePage} />
    <Route path="/comunities" component={TemplatePage} />
  </Switch>
);

export default Routes;
