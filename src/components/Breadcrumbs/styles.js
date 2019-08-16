import styled from 'styled-components';
import { Link as ComponentLink } from 'react-router-dom';
import { colors } from '~/assets/styles';

export const Container = styled.div``;

export const Link = styled(ComponentLink)`
  color: ${colors.darkGray};
  font-size: 11px;
  text-decoration: none;
  line-height: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoLink = styled.span`
  color: ${colors.darkGray};
  font-size: 11px;
  line-height: 18px;
`;
