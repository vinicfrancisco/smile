import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 29px;

  > button {
    margin-left: 5px;
  }

  ${props =>
    props.vertical &&
    css`
      flex-direction: column;

      > button {
        margin-left: 0;
      }
    `}
`;
