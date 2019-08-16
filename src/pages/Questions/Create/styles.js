import styled from 'styled-components';
import { Panel as ComponentPanel } from '~/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Panel = styled(ComponentPanel)`
  flex-direction: column;
  padding: 35px;
`;
