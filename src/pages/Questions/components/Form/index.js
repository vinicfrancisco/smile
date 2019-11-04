import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Loading, Form, Grid } from '~/components';

import { OptionsList } from './components';

function CustomForm(props) {
  const { id, data, schema, saving, onSubmit } = props;

  return (
    <>
      <Form schema={schema} initialData={data} onSubmit={onSubmit}>
        <Form.Scope path="question">
          <Grid.Row>
            <Grid.Column num={6}>
              <Form.Field>
                <Form.Label>Título da pergunta</Form.Label>
                <Form.Input multiline name="title" placeholder="Digite aqui o titulo da pergunta" />
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
