import React from 'react';

import { Container, Item, Link, BoxMenu } from './styles';

function Menu(props) {
  const { showMenu } = props;

  return (
    <Container showMenu={showMenu}>
      <BoxMenu>
        <Item>
          <Link to="/">Dashboard</Link>
        </Item>

        <Item>
          <Link to="/questions">Perguntas</Link>
        </Item>

        <Item>
          <Link to="/costumers">Clientes</Link>
        </Item>
      </BoxMenu>
    </Container>
  );
}

export default Menu;
