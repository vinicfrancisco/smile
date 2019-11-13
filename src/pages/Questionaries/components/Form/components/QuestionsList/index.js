import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { api } from "~/services";

import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Table, Form, Button, Panel, Loading, Grid } from "~/components";

import { OptionsList } from "~/pages/Questionaries/components/Form/components";

import { Length, StyledTd, Buttons } from "./styles";

const schema = Yup.object().shape({
  question: Yup.object().shape({
    title: Yup.string().required()
  })
});

function QuestionsList(props) {
  const { id } = props;

  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [data, setData] = useState([]);
  const [questionId, setQuestionId] = useState("");

  useEffect(() => {
    !!id && loadData();
  }, [id]);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get(`questions?questionary_id=${id}`);

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

      await api.post("questions", {
        title: data.question.title,
        questionary_id: id
      });

      resetForm();
      loadData();
      setLoadingSubmit(false);
    } catch (error) {
      setLoadingSubmit(false);
    }
  }

  async function handleDelete(id) {
    await api.delete(`questions/${id}`);

    loadData();
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Form.Scope path="question">
          <Grid.Row>
            <Grid.Column num={10}>
              <Form.Field>
                <Form.Label>Título da Questão</Form.Label>
                <Form.Input name="title" placeholder="Digite o título" />
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
            <span>{data.length} questões adicionadas</span>
          </Length>
          <Panel>
            <Table shadowDisabled>
              <thead>
                <tr>
                  <Table.Column head>Título</Table.Column>
                  <Table.Column head />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Loading table size={40} />
                ) : (
                  <>
                    {data.map(question => (
                      <Table.Row key={String(question.id)}>
                        <StyledTd>{question.title}</StyledTd>

                        <Table.Column right>
                          <Button
                            icon
                            onClick={() => setQuestionId(question.id)}
                          >
                            <FaPencilAlt size={10} />
                          </Button>

                          <Button
                            icon
                            onClick={() => handleDelete(question.id)}
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

      {questionId !== "" && (
        <OptionsList id={questionId} setQuestionId={setQuestionId} />
      )}
    </>
  );
}

export default QuestionsList;
