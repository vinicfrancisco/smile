import React from 'react';
import { withLayout } from '~/hocs';

import { Container, Route } from './styles';

function PrivateRoute(props) {
  const { component: RenderComponent } = props;

  return (
    <Container {...props}>
      <Route render={props => <RenderComponent {...props} />} />
    </Container>
  );
}

export default withLayout()(PrivateRoute);
