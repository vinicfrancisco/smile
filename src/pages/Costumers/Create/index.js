import React, { useState } from 'react';
import { api } from '~/services';
import * as Yup from 'yup';
import moment from 'moment';

import { Breadcrumbs, Page } from '~/components';
import { Form } from '~/pages/Costumers/components';

import { Container, Panel } from './styles';

const breadcrumbs = [
  { name: 'inicio', to: '/' },
  { name: 'clientes', to: '/costumers' },
  { name: 'novo cliente', to: '' },
];

const schema = Yup.object().shape({
  costumer: Yup.object().shape({
    name: Yup.string().required(),
  }),
});

function Create(props) {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({
    question: {
      name: '',
    },
  });

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const { history } = props;

      // await api.post('content/v2/banners', {
      //   ...data,
      //   costumer: {
      //     name: data.question.title,
      //   },
      // });

      setLoading(false);
      history.push('/costumers');
      swal('Adicionado', 'Cliente adicionado com sucesso', 'success');
    } catch (error) {
      setLoading(false);
      swal('Ops, algo deu errado', 'Falha ao criar cliente', 'error');
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Novo Cliente</h2>
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
