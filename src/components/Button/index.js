import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

export default styled.button.attrs({ type: 'button' })`
  align-items: center;
  background: ${props => (props.color ? colors[props.color] : colors.primary)};
  border: 0;
  border-radius: 25px;
  box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  height: ${props => (props.large ? '44px' : '34px')};
  line-height: 19px;
  justify-content: center;
  padding: 0 20px;
  text-decoration: none;
  text-transform: uppercase;

  @media print {
    display: none;
  }

  &:disabled {
    opacity: 0.6;
  }

  > a {
    color: inherit;
    font-size: 13px;
    font-weight: 600;
    line-height: 19px;
    text-decoration: none;
  }

  ${props =>
    props.outline &&
    css`
      background: ${colors.white};
      color: ${props => (props.color ? colors[props.color] : colors.primary)};
      border: 1px solid ${props => (props.color ? colors[props.color] : colors.primary)};
    `}

  ${props =>
    props.text &&
    css`
      background: ${colors.white};
      border: ${colors.white};
      box-shadow: none;
      color: ${colors.black};
    `}

    ${props =>
      props.icon &&
      css`
        background: ${colors.lightGray};
        color: ${colors.darkGray};
        height: 23px;
        padding: 0;
        width: 23px;
      `}

`;
