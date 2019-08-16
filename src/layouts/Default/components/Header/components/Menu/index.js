import React, { useState, useEffect } from 'react';

import { URLParser } from '~/common';

import { Nav, Title, Link } from './styles';

function Menu(props) {
  const { location } = props;
  const [active, setActive] = useState(URLParser(props.location));

  useEffect(() => {
    setActive(URLParser(location));
    console.log(URLParser(location));
  }, [location]);

  return (
    <Nav>
      <Title active={active === ''}>
        <Link to="/">Dashboard</Link>
      </Title>

      <Title active={active === 'questions'}>
        <Link to="/questions">Perguntas</Link>
      </Title>

      <Title active={active === 'costumers'}>
        <Link to="/costumers">Clientes</Link>
      </Title>
    </Nav>
  );
}

export default Menu;
