import React from 'react';

import { Container, Box, Title, Content } from './styles';

function Modal(props) {
  const { title, children } = props;

  return (
    <Container>
      <Box>
        <Title>{title}</Title>

        <Content>{children}</Content>
      </Box>
    </Container>
  );
}

export default Modal;
