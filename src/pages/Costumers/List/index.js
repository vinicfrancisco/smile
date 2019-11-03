import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '~/services';
import queryString from 'query-string';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Breadcrumbs, Button, Page, Panel, Table, Loading, Pagination, Sort, Label } from '~/components';

import { Container, Actions } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '/' }, { name: 'clientes', to: '' }];

function List(props) {
  const { location } = props;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(() => queryString.parse(location.search).page || 1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [page]);

  useEffect(() => {
    const newPage = queryString.parse(location.search).page || 1;
    page !== newPage ? setPage(() => newPage) : page;
  }, [location]);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get(`users?page=${page}&per=25`);
      const { data, total } = response.data;

      setData(data);
      setTotal(parseInt(total));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      const confirm = await swal({
        title: 'Deseja remover?',
        text: 'Você tem certeza de que deseja remover o cliente?',
        buttons: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
        },
        icon: 'warning',
      });
      if (confirm) {
        await api.delete(`users/${id}`);
        swal('Removido', 'Cliente removido com sucesso.', 'success');
        loadData();
      }
    } catch (error) {
      swal('Ops, algo deu errado', 'Não foi possível remover o cliente.', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />
            <h2>Clientes</h2>
          </Page.Title>
        </Page.Header>

        {loading && !data.length ? (
          <>
            <Loading container size={40} />
          </>
        ) : (
          <Panel>
            {loading && <Loading table size={40} />}
            <Table shadowDisabled>
              <thead>
                <Table.Row>
                  <Table.Column head>Nome</Table.Column>

                  <Table.Column head>E-mail</Table.Column>

                  <Table.Column head />
                </Table.Row>
              </thead>
              <tbody>
                {data.map(user => (
                  <Table.Row key={user.id}>
                    <Table.Column large>{user.username}</Table.Column>

                    <Table.Column large>{user.email}</Table.Column>

                    <Table.Column right>
                      <Actions>
                        <Button icon>
                          <Link to={`/costumers/${user.id}/edit`}>
                            <FaPencilAlt size={10} />
                          </Link>
                        </Button>

                        <Button icon onClick={() => handleDelete(user.id)}>
                          <FaTrashAlt size={10} />
                        </Button>
                      </Actions>
                    </Table.Column>
                  </Table.Row>
                ))}
              </tbody>
            </Table>
          </Panel>
        )}

        <Pagination total={total} {...props} />
      </Container>
    </Page>
  );
}

export default List;
