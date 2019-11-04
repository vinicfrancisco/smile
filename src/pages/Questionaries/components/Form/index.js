import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Loading, Form, Grid } from '~/components';

function CustomForm(props) {
  const { data, schema, saving, onSubmit } = props;

  return (
    <Form schema={schema} initialData={data} onSubmit={onSubmit}>
      <Form.Scope path="questionary">
        <Grid.Row>
          <Grid.Column num={8}>
            <Form.Field>
              <Form.Label>Título</Form.Label>
              <Form.Input name="title" placeholder="Digite o título do questionário" />
            </Form.Field>

            <Form.Field>
              <Form.Label>Descrição</Form.Label>
              <Form.Input multiline name="description" placeholder="Digite a descrição do questionário" />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Form.Scope>

      <Form.Buttons>
        <Button text>
          <Link to="/questionaries">Voltar</Link>
        </Button>

        <Button type="submit" disabled={saving}>
          {saving ? <Loading type="button" /> : 'Salvar'}
        </Button>
      </Form.Buttons>
    </Form>
  );
}

export default CustomForm;
