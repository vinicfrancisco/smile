import styled from "styled-components";
import { colors } from "~/assets/styles";
import { Table } from "~/components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

export const Length = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  span {
    color: ${colors.darkGray};
    font-size: 13px;
  }
`;

export const StyledTd = styled(Table.Column)`
  width: 100%;

  input {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  height: 63px;
  justify-content: flex-end;
`;
