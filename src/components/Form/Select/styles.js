import styled, { css } from 'styled-components';
import Select from 'react-select';
import { colors } from '~/assets/styles';

export const StyledSelect = styled(Select)`
  background: ${colors.white};
  font-size: 13px;
  font-weight: normal;
  line-height: 23px;
  width: 100%;

  > div {
    height: 100%;
    border: 1px solid ${colors.border};
    border-radius: 10px;
  }

  * div {
    > span {
      background: ${colors.white};
    }
  }

  & + span {
    color: ${colors.error};
    font-size: 11px;
    font-weight: 300;
    margin-top: 3px;
  }

  ${props =>
    props.isMulti &&
    css`
      > div {
        &:last-child {
          border: 0;
        }
      }
    `}
`;
