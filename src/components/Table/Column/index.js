import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

export default styled.td`
  border-top: 1px solid ${colors.lightGray};
  color: ${colors.black};
  font-size: 13px;
  font-weight: normal;
  line-height: 21px;
  min-width: 80px;
  padding: 10px 12px;
  text-align: left;
  vertical-align: middle;

  button {
    display: inline-flex;
  }

  >  a {
    color: ${colors.black};
    font-size: 13px;
    font-weight: normal;
    line-height: 21px;
    padding: 10px 12px;
    text-align: left;
    text-decoration: none;
    vertical-align: middle;
  }

  > b {
    font-weight: 600;
  }

  ${props =>
    props.head &&
    css`
      border-top: 0;
      color: ${colors.darkGray};
      line-height: 18px;
    `}

  ${props =>
    props.right &&
    css`
      text-align: right;
    `}

  ${props =>
    props.middle &&
    css`
      text-align: center;
    `}

  ${props =>
    props.large &&
    css`
      min-width: 200px;
    `}

  ${props =>
    props.medium &&
    css`
      min-width: 150px;
    `}

  ${props =>
    props.small &&
    css`
      min-width: 40px;
    `}
`;
