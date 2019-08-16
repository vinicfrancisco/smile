import React from 'react';

import { Container, StyledInput, Checkbox } from './styles';

function Input(props) {
  return (
    <Container>
      <StyledInput {...props} />
      {props.type === 'checkbox' && <Checkbox />}
    </Container>
  );
}

export default Input;
