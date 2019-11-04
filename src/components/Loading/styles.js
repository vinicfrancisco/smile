import styled, { css, keyframes } from 'styled-components';
import { colors } from '~/assets/styles';

import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  ${props =>
    props.container &&
    css`
      align-items: center;
      display: flex;
      flex: 1;
      justify-content: center;

      > svg {
        color: ${colors.primary};
      }
    `}

  ${props =>
    props.table &&
    css`
      /* align-items: center; */
      background: rgba(255, 255, 255, 0.8);
      bottom: 0;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      padding: 20px 0 0;
      width: 100%;

      > svg {
        color: ${colors.primary};
      }
    `}
`;

export const Spinner = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;

  ${props =>
    props.type === 'button' &&
    css`
      margin-right: 5px;
    `}
`;
