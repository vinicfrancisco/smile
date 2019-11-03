import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, device } from '~/assets/styles';

const animation = keyframes`
  from {
    top: -130px;
  }

  to {
    top: 0;
  }
`;

export const Container = styled.div`
  animation: ${animation} 0.3s ease-out;
  align-items: center;
  background: ${colors.white};
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.07);
  display: block;
  height: 100px;
  justify-content: center;
  position: relative;
  width: 100%;

  @media ${device.desktop} {
    display: none;
  }

  @media print {
    display: none;
    @page {
      margin: 15px;
    }
    body {
      margin: 1.6cm;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0 auto;
    max-width: 1130px;
    width: 100%;
  }
`;

export const Logo = styled.img`
  bottom: 10px;
  height: 80px;
  margin-top: 30px;
  position: relative;
  width: 240px;
`;

export const LinkLogo = styled(Link)`
  margin-right: 90px;
  display: flex;
  justify-content: center;
`;

export const Navigation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  left: -30px;
  position: relative;
`;

export const User = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  > img {
    border-radius: 20px;
    height: 30px;
    margin-right: 12px;
    width: 30px;
  }
  > span {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-right: 12px;
    text-align: center;
  }
`;
