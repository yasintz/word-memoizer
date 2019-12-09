import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { Home } from './home';
import { WordRegister } from './word-register';
import { WordDetail } from './word-detail';
import { Page404 } from './404-component';
import styled from '~/styled';
import { Container } from '~/components/ui';
import { GrammerDetail } from './grammer-detail';

interface IRoute {
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/word-register',
    component: WordRegister,
  },
  {
    path: '/word/:id',
    component: WordDetail,
  },
  {
    path: '/grammer/:id',
    component: GrammerDetail,
  },
];

const StyledLink = styled(NavLink)`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Routes = React.memo(() => {
  return (
    <>
      <Container>
        <StyledLink to="/">
          <strong>Home</strong>
        </StyledLink>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} path={route.path} component={route.component} exact />
          ))}
          <Route component={Page404} />
        </Switch>
      </Container>
    </>
  );
});

export default Routes;
