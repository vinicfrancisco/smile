import React, { useState } from 'react';
import { api } from '~/services';
import * as Yup from 'yup';
import moment from 'moment';

import { Breadcrumbs, Page } from '~/components';
import { Form } from '~/pages/Questions/components';

import { Container, Panel } from './styles';

const breadcrumbs = [
  { name: 'inicio', to: '/' },
  { name: 'perguntas', to: '/questions' },
  { name: 'nova pergunta', to: '' },
];

const schema = Yup.object().shape({
  question: Yup.object().shape({
    title: Yup.string().required(),
    questionary_id: Yup.string().required(),
  }),
});

function Create(props) {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({
    question: {
      title: '',
      questionary_id: '',
    },
  });

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const { history } = props;

      await api.post('questions', {
        title: data.question.title,
        questionary_id: data.question.questionary_id,
      });

      setLoading(false);
      history.push('/questions');
      swal('Adicionada', 'Pergunta adicionada com sucesso', 'success');
    } catch (error) {
      setLoading(false);
      swal('Ops, algo deu errado', 'Falha ao criar pergunta', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Nova pergunta</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          <Form schema={schema} saving={loading} onSubmit={handleSubmit} data={initialData} />
        </Panel>
      </Container>
    </Page>
  );
}

export default Create;
