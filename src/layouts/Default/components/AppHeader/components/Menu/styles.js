import styled from 'styled-components';
import { colors, device } from '~/assets/styles';

import { Link as LinkComponent } from 'react-router-dom';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.showMenu ? 'block' : 'none')};
  height: 100%;
  left: 0;
  position: absolute;
  top: 46px;
  width: 100%;
  z-index: 500;
`;

export const BoxMenu = styled.ul`
  background: ${colors.white};
  list-style-type: none;
  padding: 5px 0;
  position: absolute;
  text-align: left;
  width: 200px;
  z-index: 999;

  @media ${device.mobileS} {
    height: 100%;
    width: 100%;
  }
`;

export const Item = styled.li`
  color: ${colors.black};
  font-size: 13px;
  padding: 10px 15px;
  text-transform: uppercase;
`;

export const Link = styled(LinkComponent)`
  color: ${colors.black};
  text-decoration: none;
`;
