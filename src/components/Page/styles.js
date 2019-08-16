import styled, { css, keyframes } from 'styled-components';
import { device } from '~/assets/styles';

const fadeIn = keyframes`
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    margin-top: 60px;
  }

  to {
    margin-top: 15px;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    margin-top: 15px;
  }

  to {
    opacity: 0;
    margin-top: 60px;
  }
`;

export const Container = styled.div`
  animation: ${slideUp} 0.3s ease-out, ${fadeIn} 0.4s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px auto;
  max-width: 1130px;
  width: 100%;

  ${props =>
    props.logouting &&
    css`
      opacity: 0;
      transition: all 0.5s;
    `}

    @media ${device.desktop} {
      padding: 0 15px;
    }
`;
