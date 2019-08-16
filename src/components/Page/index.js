import React from 'react';

import Title from './Title';
import Header from './Header';
import Actions from './Actions';

import { Container } from './styles';

const Page = ({ children }) => {
  return <Container>{children}</Container>;
};

Page.Header = Header;
Page.Title = Title;
Page.Actions = Actions;

export default Page;
