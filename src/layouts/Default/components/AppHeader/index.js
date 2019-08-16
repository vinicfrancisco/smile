import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { FaBars, FaPowerOff } from 'react-icons/fa';
import LogoImage from '~/assets/images/logo.png';
import { Menu } from './components';

import { Container, Logo, User, Item, MenuContainer } from './styles';
import { colors } from '~/assets/styles';

function AppHeader(props) {
  const [showLogout, setShowLogout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.logged);

  function handleLogout() {
    dispatch(AuthActions.logoutRequest());
  }

  return (
    <Container>
      <MenuContainer onClick={() => setShowMenu(!showMenu)}>
        <FaBars size={28} color={colors.gray} />

        <Menu showMenu={showMenu} />
      </MenuContainer>

      <Logo src={LogoImage} />

      <User showLogout={showLogout} onClick={() => setShowLogout(!showLogout)}>
        <img src={LogoImage} />

        <div>
          <ul>
            <Item>
              <button onClick={() => handleLogout()}>
                <FaPowerOff color={colors.darkGray} size={14} />
                Sair
              </button>
            </Item>
          </ul>
        </div>
      </User>
    </Container>
  );
}

export default AppHeader;
