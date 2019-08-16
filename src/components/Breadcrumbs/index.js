import React, { Fragment } from 'react';

import { Container, Link, NoLink } from './styles';

const Breadcrumbs = ({ data }) => {
  return (
    <Container>
      {data.map((breadcrumb, index) => (
        <Fragment key={String(breadcrumb.name)}>
          {breadcrumb.to !== '' && breadcrumb.to !== null ? (
            <Link to={breadcrumb.to}>{breadcrumb.name}</Link>
          ) : (
            <NoLink>{breadcrumb.name}</NoLink>
          )}

          {index + 1 !== data.length && <NoLink> > </NoLink>}
        </Fragment>
      ))}
    </Container>
  );
};

Breadcrumbs.defaultProps = {
  data: [],
};

export default Breadcrumbs;
