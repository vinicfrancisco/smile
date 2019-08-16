import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';
import { Input } from '@rocketseat/unform';

export const Container = styled.label`
  position: relative;
  width: 100%;

  & input:checked ~ span {
    background-color: ${colors.primary};
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    bottom: 2px;
    left: 4px;
    border: solid ${colors.white};
    border-width: 0 1px 1px 0;
    height: 8px;
    transform: rotate(45deg);
    width: 3px;
  }
`;

export const StyledInput = styled(Input)`
  background: ${props => (props.disabled ? colors.lightGray : colors.white)};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  height: ${props => (props.multiline ? '125px' : '44px')};
  font-size: 13px;
  line-height: 23px;
  max-width: 100%;
  min-height: 44px;
  padding: ${props => (props.multiline ? '10px 15px' : '0 15px')};
  width: 100%;

  ${props =>
    props.table &&
    css`
      height: 35px;
      padding: 0 10px;
      width: 80px;
    `}

  & + span {
    color: ${colors.error};
    font-size: 11px;
    font-weight: 300;
    margin-top: 3px;
  }

  &:focus {
    border-color: ${colors.borderFocused};
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  }

  ${props =>
    props.type === 'checkbox' &&
    css`
      cursor: pointer;
      height: 0;
      opacity: 0;
      position: absolute;
      width: 0;
    `}
`;

export const Checkbox = styled.span`
  background: ${colors.white};
  border: 1px solid ${colors.darkGray};
  height: 14px;
  left: 24px;
  position: absolute;
  top: 11px;
  width: 14px;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;
