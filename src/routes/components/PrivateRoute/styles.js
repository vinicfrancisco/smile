import styled, { css, keyframes } from 'styled-components';
import { Route as ComponentRoute } from 'react-router-dom';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  ${props =>
    props.logouting &&
    css`
      animation: ${fadeOut} 0.4s linear forwards;
    `}
`;

export const Route = styled(ComponentRoute)``;
