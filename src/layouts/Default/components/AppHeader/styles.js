import styled from 'styled-components';
import { device, colors } from '~/assets/styles';

export const Container = styled.div`
  align-items: center;
  background: ${colors.white};
  box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 15px;
  width: 100%;

  @media ${device.desktop} {
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 40px;
  margin-bottom: 5px;
  width: 40px;
`;

export const User = styled.button`
  background: none;
  border: 0;

  div {
    background: rgba(0, 0, 0, 0.6);
    display: ${props => (props.showLogout ? 'block' : 'none')};
    height: 100%;
    position: absolute;
    right: 0;
    top: 46px;
    width: 100%;
    z-index: 500;

    ul {
      background: ${colors.white};
      list-style-type: none;
      padding: 5px 0;
      position: absolute;
      right: 0;
      width: 100px;
      z-index: 999;
    }
  }

  > img {
    border-radius: 15px;
    height: 30px;
    width: 30px;
  }
`;

export const Item = styled.li`
  display: flex;
  padding: 10px 15px;

  button {
    align-items: center;
    background: none;
    border: 0;
    color: ${colors.black};
    display: flex;
    flex-direction: row;
    font-size: 13px;
    justify-content: space-between;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
  }
`;

export const MenuContainer = styled.button`
  background: none;
  border: 0;
`;
