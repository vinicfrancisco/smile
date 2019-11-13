import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "~/services";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {
  Breadcrumbs,
  Button,
  Page,
  Panel,
  Table,
  Loading,
  Modal,
  Form
} from "~/components";

import { Container, Actions, Buttons } from "./styles";

const breadcrumbs = [
  { name: "inicio", to: "/" },
  { name: "pacientes", to: "" }
];

function List(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [addPacient, setAddPacient] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get(`pacients?page=1&per=100`);
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
        title: "Deseja remover?",
        text: "Você tem certeza de que deseja remover o paciente?",
        buttons: {
          cancel: "Cancelar",
          confirm: "Confirmar"
        },
        icon: "warning"
      });
      if (confirm) {
        await api.delete(`pacients/${id}`);
        swal("Removido", "Paciente removido com sucesso.", "success");
        loadData();
      }
    } catch (error) {
      swal(
        "Ops, algo deu errado",
        "Não foi possível remover o paciente.",
        "error"
      );
    }
  }

  async function handleAddPacient(data) {
    try {
      setSaving(true);
      await api.post("/pacients", data);

      setSaving(false);
      swal("Sucesso", "O novo paciente foi adicionado com sucesso", "success");
      setAddPacient(false);
      loadData();
    } catch (error) {
      setSaving(false);
      swal(
        "Ops, algo deu errado",
        "Não foi possível cadastrar o novo paciente",
        "success"
      );
    }
  }

  return (
    <>
      <Page>
        <Container>
          <Page.Header>
            <Page.Title>
              <Breadcrumbs data={breadcrumbs} />
              <h2>Pacientes</h2>
            </Page.Title>

            <Page.Actions>
              <Button onClick={() => setAddPacient(true)}>
                Adicionar paciente
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

                    <Table.Column head>E-mail</Table.Column>

                    <Table.Column head />
                  </Table.Row>
                </thead>
                <tbody>
                  {data.map(pacient => (
                    <Table.Row key={pacient.id}>
                      <Table.Column large>{pacient.user.username}</Table.Column>

                      <Table.Column large>{pacient.user.email}</Table.Column>

                      <Table.Column right>
                        <Actions>
                          {/* <Button icon>
                            <Link to={`/costumers/${pacient.id}/edit`}>
                              <FaPencilAlt size={10} />
                            </Link>
                          </Button> */}

                          <Button icon onClick={() => handleDelete(pacient.id)}>
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
        </Container>
      </Page>

      {addPacient && (
        <Modal title="Cadastrar novo paciente">
          <Form onSubmit={handleAddPacient}>
            <Form.Field>
              <Form.Label>E-mail:</Form.Label>
              <Form.Input
                name="email"
                placeholder="Digite o email do paciente"
              />
            </Form.Field>

            <Buttons>
              <Button text onClick={() => setAddPacient(false)}>
                Fechar
              </Button>

              <Button type="submit" disabled={saving}>
                {saving ? <Loading type="button" /> : "Adicionar"}
              </Button>
            </Buttons>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default List;
