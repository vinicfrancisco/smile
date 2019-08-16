import styled, { css } from 'styled-components';
import { device } from '~/assets/styles';

export default styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  

  ${props =>
    props.num === 1 &&
    css`
      flex: 0 0 auto;
      max-width: 100%;
      width: auto;
    `}

  ${props =>
    props.num === 2 &&
    css`
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    `}
    
  ${props =>
    props.num === 3 &&
    css`
      flex: 0 0 25%;
      max-width: 25%;
    `}

  ${props =>
    props.num === 4 &&
    css`
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    `}

  ${props =>
    props.num === 5 &&
    css`
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    `}

  ${props =>
    props.num === 6 &&
    css`
      flex: 0 0 50%;
      max-width: 50%;
    `}

  ${props =>
    props.num === 7 &&
    css`
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    `}

  ${props =>
    props.num === 8 &&
    css`
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    `}

  ${props =>
    props.num === 9 &&
    css`
      flex: 0 0 75%;
      max-width: 75%;
    `}

  ${props =>
    props.num === 10 &&
    css`
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    `}

  ${props =>
    props.num === 11 &&
    css`
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    `}

    @media ${device.desktop} {
      flex: 0 0 100%;
      max-width: 100%;
      width: 100%;
    }
`;
