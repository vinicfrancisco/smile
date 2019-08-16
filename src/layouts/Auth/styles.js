import styled, { keyframes } from 'styled-components';
import { colors } from '~/assets/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  animation: ${fadeIn} 1.5s linear;
  align-items: center;
  background: ${colors.white};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  align-self: flex-start;
  height: 100px;
  margin-bottom: 20px;
`;
