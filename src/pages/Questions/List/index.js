import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '~/services';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Breadcrumbs, Button, Page, Panel, Table, Loading } from '~/components';

import { Container, Actions } from './styles';

const breadcrumbs = [{ name: 'inicio', to: '/' }, { name: 'perguntas', to: '' }];

function List(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get('questions');
      const { data } = response;

      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      const confirm = await swal({
        title: 'Deseja remover?',
        text: 'Você tem certeza de que deseja excluir esta pergunta?',
        buttons: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
        },
        icon: 'warning',
      });
      if (confirm) {
        await api.delete(`questions/${id}`);
        await swal('Removido', 'Pergunta removida com sucesso.', 'success');
        loadData();
      }
    } catch (error) {
      swal('Ops, algo deu errado', 'Não foi possível excluir a pergunta.', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Perguntas</h2>
          </Page.Title>

          <Page.Actions>
            <Button>
              <Link to="/questions/create">Nova pergunta</Link>
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

                  <Table.Column head />
                </Table.Row>
              </thead>
              <tbody>
                {data.map(question => {
                  const { id, title } = question;

                  return (
                    <Table.Row key={id}>
                      <Table.Column>{title}</Table.Column>

                      <Table.Column right>
                        <Actions>
                          <Button icon>
                            <Link to={`/questions/${id}/edit`}>
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
