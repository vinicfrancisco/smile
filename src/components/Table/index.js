import React from 'react';

import { StyledTable } from './styles';

import Row from './Row';
import Column from './Column';

const Table = props => {
  return <StyledTable {...props}>{props.children}</StyledTable>;
};

Table.Row = Row;
Table.Column = Column;

export default Table;
