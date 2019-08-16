import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '~/services';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Breadcrumbs, Button, Page, Panel, Table, Loading, Label } from '~/components';

import { Container, Actions } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '/' }, { name: 'clientes', to: '' }];

function List(props) {
  const [data, setData] = useState([{ id: 123, title: 'teste' }, { id: 1234, title: 'teste2' }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);

      // const response = await api.get(`content/v2/banners?page=${page}&per=25${handleGetFilters()}${order}`);

      // const { data, meta } = response.data;

      // setData(
      //   data.map(banner => ({
      //     ...banner,
      //     attributes: {
      //       ...banner.attributes,
      //       publish_at: banner.attributes.publish_at ? moment(banner.attributes.publish_at).format('DD/MM/YYYY') : '-',
      //       unpublish_at: banner.attributes.unpublish_at
      //         ? moment(banner.attributes.unpublish_at).format('DD/MM/YYYY')
      //         : '-',
      //     },
      //   })),
      // );

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      const confirm = await swal({
        title: 'Deseja remover?',
        text: 'Você tem certeza de que deseja excluir este cliente?',
        buttons: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
        },
        icon: 'warning',
      });
      if (confirm) {
        // await api.delete(`content/v2/banners/${id}`);
        swal('Removido', 'Cliente removido com sucesso.', 'success');
        loadData();
      }
    } catch (error) {
      swal('Ops, algo deu errado', 'Não foi possível excluir o cliente.', 'error');
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

          <Page.Actions>
            <Button>
              <Link to="/costumers/create">Novo cliente</Link>
            </Button>
          </Page.Actions>
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

                  <Table.Column head>Descrição</Table.Column>
                  <Table.Column head>Ativo</Table.Column>
                  <Table.Column head />
                </Table.Row>
              </thead>
              <tbody>
                {data.map(question => {
                  const { id, title } = question;

                  return (
                    <Table.Row key={id}>
                      <Table.Column>{title}</Table.Column>
                      <Table.Column>{/* {description} */}</Table.Column>

                      <Table.Column>{/* <Label active={active}>{active ? 'Ativo' : 'Inativo'}</Label> */}</Table.Column>

                      <Table.Column right>
                        <Actions>
                          <Button icon>
                            <Link to={`/costumers/${id}/edit`}>
                              <FaPencilAlt size={10} />
                            </Link>
                          </Button>

                          <Button icon onClick={() => handleDelete(id)}>
                            <FaTrashAlt size={10} />
                          </Button>
                        </Actions>
                      </Table.Column>
                    </Table.Row>
                  );
                })}
              </tbody>
            </Table>
          </Panel>
        )}
      </Container>
    </Page>
  );
}

export default List;
