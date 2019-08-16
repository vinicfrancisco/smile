import styled from 'styled-components';
import { colors } from '~/assets/styles';

export const Container = styled.div`
  margin-top: 24px;

  > form {
    width: 450px;

    input {
      border: 1px solid #eeeeee;
      border-radius: 10px;
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.07);
    }
  }
`;
