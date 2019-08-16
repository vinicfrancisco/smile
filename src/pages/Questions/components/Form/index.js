import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Loading, Form, Grid } from '~/components';

function CustomForm(props) {
  const { data, schema, saving, onSubmit } = props;

  return (
    <Form schema={schema} initialData={data} onSubmit={onSubmit}>
      <Form.Scope path="question">
        <Grid.Row>
          <Grid.Column num={4}>
            <Form.Input name="title" placeholder="Digite o nome" />
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
  );
}

export default CustomForm;
