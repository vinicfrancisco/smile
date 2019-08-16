import React from 'react';

import { Container, Spinner } from './styles';

const Loading = props => {
  const { size } = props;

  return (
    <Container {...props}>
      <Spinner size={size} />
    </Container>
  );
};
export default Loading;
