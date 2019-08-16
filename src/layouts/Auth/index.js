import React from 'react';

import { global as Global } from '~/assets/styles';
import { Container, Logo } from './styles';

export default Page =>
  function Auth(props) {
    return (
      <>
        <Global.Styles />
        <Container>
          <div>
            <Page {...props} />
          </div>
        </Container>
      </>
    );
  };
