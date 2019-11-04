import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '~/services';

import { Button, Loading, Form, Grid } from '~/components';

import { OptionsList } from './components';

function CustomForm(props) {
  const { id, data, schema, saving, onSubmit } = props;

  const [questionaries, setQuestionaries] = useState([]);

  useEffect(() => {
    loadQuestionaries();
  }, []);

  async function loadQuestionaries() {
    try {
      const response = await api.get('questionaries');

      const { data } = response.data;

      setQuestionaries(
        data.map(questionary => ({
          value: questionary.id,
          label: questionary.title,
        })),
      );
    } catch (error) {}
  }

  return (
    <>
      <Form schema={schema} initialData={data} onSubmit={onSubmit}>
        <Form.Scope path="question">
          <Grid.Row>
            <Grid.Column num={8}>
              <Form.Field>
                <Form.Label>Título da pergunta</Form.Label>
                <Form.Input multiline name="title" placeholder="Digite aqui o titulo da pergunta" />
              </Form.Field>
            </Grid.Column>

            <Grid.Column num={4}>
              <Form.Field>
                <Form.Label>Selecione o questionário</Form.Label>
                <Form.Select name="questionary_id" placeholder="Questionário" options={questionaries} />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Form.Scope>

        <Form.Buttons>
          <Button text>
            <Link to="/questions">Voltar</Link>
          </Button>

          <Button type="submit" disabled={saving}>
            {saving ? <Loading type="button" /> : 'Salvar'}
          </Button>
        </Form.Buttons>
      </Form>

      <Form.Field>
        <Form.Label>Adicionar Opções</Form.Label>
      </Form.Field>

      <OptionsList id={id} />
    </>
  );
}

export default CustomForm;
