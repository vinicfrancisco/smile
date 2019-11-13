import React, { useState, useEffect } from "react";
import { api } from "~/services";
import * as Yup from "yup";

import { URLParser } from "~/common";
import { Breadcrumbs, Page, Loading } from "~/components";
import { Form } from "~/pages/Questionaries/components";

import { Container, Panel } from "./styles";

const breadcrumbs = [
  { name: "inicio", to: "/" },
  { name: "questionários", to: "/questionaries" },
  { name: "novo questionário", to: "" }
];

const schema = Yup.object().shape({
  questionary: Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required()
  })
});

function Edit(props) {
  const { id } = URLParser(props.location, "/questionaries/:id/edit");
  const { history } = props;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [initialData, setInitialData] = useState({
    questionary: {
      title: "",
      description: ""
    }
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await api.get(`questionaries/${id}`);
      const { data } = response;

      setInitialData({
        questionary: {
          title: data[0].title,
          description: data[0].description
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      swal("Ops, algo deu errado", "Falha ao carregar questionário", "error");
    }
  }

  async function handleSubmit(data) {
    setSaving(true);

    try {
      await api.put(`questionaries/${id}`, {
        title: data.questionary.title,
        description: data.questionary.description
      });

      setSaving(false);
      history.push("/questionaries");
      swal("Editado", "Questionário editada com sucesso", "success");
    } catch (error) {
      setSaving(false);
      swal("Ops, algo deu errado", "Falha ao editar questionário", "error");
    }
  }

  return (
    <Page>
      <Container>
        <Page.Header>
          <Page.Title>
            <Breadcrumbs data={breadcrumbs} />

            <h2>Editar questionário</h2>
          </Page.Title>
        </Page.Header>

        <Panel>
          {loading ? (
            <Loading container size={40} />
          ) : (
            <Form
              id={id}
              data={initialData}
              schema={schema}
              saving={saving}
              onSubmit={handleSubmit}
            />
          )}
        </Panel>
      </Container>
    </Page>
  );
}

export default Edit;
