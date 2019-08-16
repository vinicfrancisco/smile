import styled, { css, keyframes } from 'styled-components';
import { colors } from '~/assets/styles';

const show = keyframes`
    from {
        opacity: 0;
        top: 0;
    }

    to {
        opacity: 1;
        top: 50%;
    }
`;

const hide = keyframes`
    from {
        opacity: 1;
        top: 50%;
    }

    to {
        opacity: 0;
        top: 0;
    }
`;

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
  height: 100%;
  position: relative;

  > div {
    align-items: center;
    animation: ${show} 0.4s linear 0.2s forwards;
    display: flex;
    flex-direction: column;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translate(-50%);

    ${props =>
      props.loaded &&
      css`
        animation: ${hide} 0.4s linear forwards;
      `}

    > img {
      display: block;
    }

    > div {
      animation: ${fadeIn} 0.3s linear 0.7s forwards;
      margin-top: 10px;

      ${props =>
        props.loaded &&
        css`
          animation: ${fadeOut} 0.3s linear forwards;
        `}

      > svg {
        color: ${colors.darkPink};
      }
    }
  }
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
`;
