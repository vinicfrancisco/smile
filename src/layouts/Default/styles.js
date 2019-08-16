import styled, { css, keyframes } from 'styled-components';
import { colors } from '~/assets/styles';

const fadeIn = keyframes`
  from { 
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from { 
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  ${props =>
    props.logouting &&
    css`
      animation: ${fadeOut} 0.5s linear forwards;
    `}

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
