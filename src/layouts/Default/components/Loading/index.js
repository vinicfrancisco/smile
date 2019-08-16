import React from 'react';

import { Loading as Spinner } from '~/components';

import { Container, Logo } from './styles';

import LogoImage from '~/assets/images/logo.png';

function Loading(props) {
  return (
    <Container {...props}>
      <div>
        <Logo src={LogoImage} />
        <Spinner size={20} />
      </div>
    </Container>
  );
}

export default Loading;
