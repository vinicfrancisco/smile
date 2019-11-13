import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { api } from "~/services";

import { FaTrashAlt } from "react-icons/fa";
import { Table, Form, Button, Panel, Loading, Grid, Modal } from "~/components";

import { Container, Length, StyledTd, Buttons } from "./styles";

const schema = Yup.object().shape({
  option: Yup.object().shape({
    title: Yup.string().required(),
    score: Yup.number().required()
  })
});

function OptionsList(props) {
  const { id, setQuestionId } = props;

  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    !!id && loadData();
  }, [id]);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get(`options?question_id=${id}`);

      const { data } = response;

      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function handleSubmit(data, { resetForm }) {
    try {
      setLoadingSubmit(true);

      await api.post("options", {
        title: data.option.title,
        score: data.option.score,
        question_id: id
      });

      resetForm();
      loadData();
      setLoadingSubmit(false);
    } catch (error) {
      setLoadingSubmit(false);
    }
  }

  async function handleDelete(id) {
    await api.delete(`options/${id}`);

    loadData();
  }

  return (
    <Modal title="Cadastro de opções">
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Form.Scope path="option">
            <Grid.Row>
              <Grid.Column num={8}>
                <Form.Field>
                  <Form.Label>Título da opção</Form.Label>
                  <Form.Input name="title" placeholder="Digite o título" />
                </Form.Field>
              </Grid.Column>

              <Grid.Column num={2}>
                <Form.Field>
                  <Form.Label>Score</Form.Label>
                  <Form.Input
                    name="score"
                    type="number"
                    placeholder="Digite o score"
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column num={2}>
                <Buttons>
                  <Button
                    type="submit"
                    disabled={loadingSubmit || id === undefined}
                  >
                    {loadingSubmit ? <Loading type="button" /> : "Adicionar"}
                  </Button>
                </Buttons>
              </Grid.Column>
            </Grid.Row>
          </Form.Scope>
        </Form>

        {data.length > 0 && (
          <>
            <Length>
              <span>{data.length} opções adicionadas</span>
            </Length>
            <Panel>
              <Table shadowDisabled>
                <thead>
                  <tr>
                    <Table.Column head>Título</Table.Column>
                    <Table.Column head>Score</Table.Column>
                    <Table.Column head />
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <Loading table size={40} />
                  ) : (
                    <>
                      {data.map(option => (
                        <Table.Row key={String(option.id)}>
                          <StyledTd>{option.title}</StyledTd>

                          <Table.Column>{option.score}</Table.Column>

                          <Table.Column right>
                            <Button
                              icon
                              onClick={() => handleDelete(option.id)}
                            >
                              <FaTrashAlt size={10} />
                            </Button>
                          </Table.Column>
                        </Table.Row>
                      ))}
                    </>
                  )}
                </tbody>
              </Table>
            </Panel>
          </>
        )}

        <Button onClick={() => setQuestionId("")}>Fechar</Button>
      </Container>
    </Modal>
  );
}

export default OptionsList;
