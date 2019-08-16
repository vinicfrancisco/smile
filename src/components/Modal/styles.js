import styled from 'styled-components';
import { colors, device } from '~/assets/styles';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  @media print {
    padding-top: 30px;

    @page {
      margin: 0;
    }
    body {
      margin: 1.6cm;
    }
  }
`;

export const Box = styled.div`
  background: ${colors.white};
  border-radius: 3px;
  left: 50%;
  max-height: 95%;
  max-width: 90%;
  overflow: scroll;
  padding: 32px 16px 13px 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${device.desktop} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: ${colors.darkPink};
  font-size: 32px;
  font-weight: 800;
  line-height: 37px;
  margin-bottom: 25px;
  text-align: left;
`;

export const Content = styled.div``;
