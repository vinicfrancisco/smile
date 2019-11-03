import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { api } from '~/services';
import queryString from 'query-string';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Breadcrumbs, Button, Page, Panel, Table, Loading, Pagination } from '~/components';

import { Container, Actions } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '/' }, { name: 'questionários', to: '' }];

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

      const response = await api.get(`questionaries?page=${page}&per=25`);
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
        text: 'Você tem certeza de que deseja remover o questionário?',
        buttons: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
        },
        icon: 'warning',
      });
      if (confirm) {
        await api.delete(`questionaries/${id}`);
        swal('Removido', 'Questionário removido com sucesso.', 'success');
        loadData();
      }
    } catch (error) {
      swal('Ops, algo deu errado', 'Não foi possível remover o questionário.', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />
            <h2>Questionários</h2>
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

                  <Table.Column head>Data de criação</Table.Column>

                  <Table.Column head>Observação</Table.Column>

                  <Table.Column head />
                </Table.Row>
              </thead>
              <tbody>
                {data.map(questionary => (
                  <Table.Row key={questionary.id}>
                    <Table.Column large>{questionary.name}</Table.Column>

                    <Table.Column large>{moment(questionary.created_at).format('DD/MM/YYYY')}</Table.Column>

                    <Table.Column large>{questionary.observation}</Table.Column>

                    <Table.Column right>
                      <Actions>
                        <Button icon>
                          <Link to={`/questionaries/${questionary.id}/edit`}>
                            <FaPencilAlt size={10} />
                          </Link>
                        </Button>

                        <Button icon onClick={() => handleDelete(questionary.id)}>
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
