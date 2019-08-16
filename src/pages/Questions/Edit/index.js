import React, { useState, useEffect } from 'react';
import { api } from '~/services';
import * as Yup from 'yup';
import moment from 'moment';

import { URLParser } from '~/common';
import { Breadcrumbs, Page, Loading } from '~/components';
import { Form } from '~/pages/Questions/components';

import { Container, Panel } from './styles';

const breadcrumbs = [
  { name: 'inicio', to: '/' },
  { name: 'perguntas', to: '/questions' },
  { name: 'editar banner', to: '' },
];

const schema = Yup.object().shape({
  question: Yup.object().shape({
    title: Yup.string().required(),
  }),
});

function Edit(props) {
  const { id } = URLParser(props.location, '/questions/:id/edit');
  const { history } = props;
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [initialData, setInitialData] = useState({
    question: {
      title: '',
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);

      //GET

      setLoading(false);
    } catch (error) {
      setLoading(false);
      swal('Ops, algo deu errado', 'Falha ao carregar pergunta', 'error');
    }
  }

  async function handleSubmit(data) {
    setSaving(true);

    try {
      //PUT

      setSaving(false);
      history.push('/questions');
      swal('Editado', 'Pergunta editada com sucesso', 'success');
    } catch (error) {
      setSaving(false);
      swal('Ops, algo deu errado', 'Falha ao editar pergunta', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Editar pergunta</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          {loading ? (
            <Loading container size={40} />
          ) : (
            <Form data={initialData} schema={schema} saving={saving} onSubmit={handleSubmit} />
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default Edit;
