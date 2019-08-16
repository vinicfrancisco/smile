import styled from 'styled-components';
import { colors } from '~/assets/styles';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;

  > span {
    color: ${colors.darkGray};
    font-size: 11px;
    line-height: 18px;
  }
`;

export const Pages = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  list-style: none;

  > li {
    font-size: 13px;
    font-weight: 600;
    line-height: 21px;
    margin-right: 6px;

    > span {
      color: ${colors.primary};
    }

    > a {
      color: ${colors.darkGray};
      transition: all 0.5s;
      text-decoration: none;

      &:hover {
        color: ${colors.black};
      }

      > svg {
        position: relative;
        top: 2px;
      }
    }
  }
`;
