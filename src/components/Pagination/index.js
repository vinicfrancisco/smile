import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';

import { Container, Pages } from './styles';

function Pagination(props) {
  const { total, location, max, min } = props;
  const [current, setCurrent] = useState(() => {
    return parseInt(queryString.parse(location.search).page) || 1;
  });
  const [url, setUrl] = useState(location.pathname);
  const [params, setParams] = useState(location.pathname);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const params = queryString.parse(location.search);
    const defaultParams = Object.keys(params)
      .filter(param => param !== 'page')
      .reduce((content, param, index) => {
        return `${content}&${param}=${params[param]}`;
      }, '');

    setUrl(location.pathname);
    setParams(defaultParams);
  }, []);

  useEffect(() => {
    setCurrent(() => parseInt(queryString.parse(location.search).page) || 1);
  }, [location]);

  useEffect(() => {
    const length = total > max ? max : total;
    setPages(
      Array.from({ length }).map((value, index) => {
        const page = index + 1;
        const number = current <= min ? page : current <= total - min ? current - max + min + page : total - max + page;

        return {
          id: `page${number}`,
          url: `${url}?page=${number}${params}`,
          number,
        };
      }),
    );
  }, [current, total]);

  return (
    <Container>
      {total > 1 && (
        <>
          <span>
            Exibindo página {current} de {total}
          </span>

          <Pages>
            {current > 1 && (
              <>
                <li>
                  <Link to={`${url}?page=1${params}`}>
                    <FaAngleDoubleLeft />
                  </Link>
                </li>
                <li>
                  <Link to={`${url}?page=${current - 1}${params}`}>
                    <FaAngleLeft />
                  </Link>
                </li>
              </>
            )}
            {pages.map(page => (
              <li key={page.id}>
                {current === page.number ? <span>{page.number}</span> : <Link to={page.url}>{page.number}</Link>}
              </li>
            ))}
            {current < total && (
              <>
                <li>
                  <Link to={`${url}?page=${current + 1}${params}`}>
                    <FaAngleRight />
                  </Link>
                </li>
                <li>
                  <Link to={`${url}?page=${total}${params}`}>
                    <FaAngleDoubleRight />
                  </Link>
                </li>
              </>
            )}
          </Pages>
        </>
      )}
    </Container>
  );
}

Pagination.defaultProps = {
  min: 5,
  max: 9,
};

export default Pagination;
