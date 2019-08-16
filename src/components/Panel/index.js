import styled, { css } from 'styled-components';
import { colors } from '~/assets/styles';

export default styled.div`
  align-self: center;
  background: ${colors.white};
  border-radius: 3px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: auto;
  padding: 10px 15px;
  position: relative;
  width: 100%;
  box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);

  ${props =>
    props.shadowDisabled &&
    css`
      box-shadow: none;
    `}
`;
