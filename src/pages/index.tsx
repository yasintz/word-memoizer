import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Page404 } from './404-component';

interface IRoute {
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
  },
];

const Routes = React.memo(() => {
  return (
    <>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact />
        ))}
        <Route component={Page404} />
      </Switch>
    </>
  );
});

export default Routes;
