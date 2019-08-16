import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

import { Link as LinkComponent } from 'react-router-dom';

export const Nav = styled.ul`
  align-items: flex-end;
  display: flex;
  height: 50px;
  list-style: none;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  position: absolute;
`;

export const Title = styled.li`
  margin-right: 35px;

  > span {
    border-bottom: 3px solid ${colors.white};
    color: ${colors.black};
    display: block;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.02em;
    padding: 0 0 12px;
    transition: all 0.4s;
    text-decoration: none;
    text-transform: uppercase;
  }

  > a {
    border-bottom: 3px solid ${colors.white};
    color: ${colors.black};
    display: block;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.02em;
    padding: 0 0 12px;
    transition: all 0.4s;
    text-decoration: none;
    text-transform: uppercase;
  }

  &:hover {
    > span {
      border-bottom-color: ${colors.primary};
      color: ${colors.primary};
    }

    > a {
      border-bottom-color: ${colors.primary};
      color: ${colors.primary};
    }
  }

  ${props =>
    props.active &&
    css`
      > a {
        border-bottom-color: ${colors.primary};
        color: ${colors.primary};
      }
    `}
`;

export const Link = styled(LinkComponent)`
  color: ${props => (props.active ? colors.primary : colors.black)};
  font-size: 13px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${colors.primary};
  }
`;
