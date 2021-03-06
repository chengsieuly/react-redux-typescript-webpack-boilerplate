import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

// Modules
import App from './containers/App';
import Home from './containers/Home';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
