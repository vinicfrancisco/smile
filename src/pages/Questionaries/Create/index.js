import React, { useState } from 'react';
import { api } from '~/services';
import * as Yup from 'yup';

import { Breadcrumbs, Page } from '~/components';
import { Form } from '~/pages/Questionaries/components';

import { Container, Panel } from './styles';

const breadcrumbs = [
  { name: 'inicio', to: '/' },
  { name: 'questionários', to: '/questionaries' },
  { name: 'novo questionário', to: '' },
];

const schema = Yup.object().shape({
  questionary: Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  }),
});

function Create(props) {
  const [saving, setSaving] = useState(false);
  const [initialData, setInitialData] = useState({
    questionary: {
      title: '',
      description: '',
    },
  });

  async function handleSubmit(data) {
    setSaving(true);

    try {
      const { history } = props;

      await api.post('questionaries', {
        title: data.category.title,
        description: data.category.description,
      });

      setSaving(false);
      history.push('/questionaries');
      swal('Adicionado', 'Questionário adicionado com sucesso', 'success');
    } catch (error) {
      setSaving(false);
      swal('Ops, algo deu errado', 'Falha ao criar categoria', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Novo questionário</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          <Form data={initialData} schema={schema} saving={saving} onSubmit={handleSubmit} />
        </Panel>
      </Container>
    </Page>
  );
}

export default Create;
