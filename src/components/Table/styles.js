import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

export const StyledTable = styled.table`
  background: ${colors.white};
  border-color: ${colors.borderFocused};
  border-radius: 3px;
  box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
  width: 100%;

  ${props =>
    props.shadowDisabled &&
    css`
      border-bottom: 1px solid ${colors.border};
      box-shadow: none;
    `}
`;
