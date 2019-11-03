import React from 'react';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import logo from '~/assets/images/logo.png';
import { Loading } from '~/components';
import { Container, Title, Button, Form, Logo } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

function Login() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);

  function handleLogin(data) {
    dispatch(AuthActions.loginRequest(data));
  }

  return (
    <Container>
      <Logo src={logo} />

      <Title>Login</Title>

      <Form schema={schema} onSubmit={handleLogin}>
        <Form.Field>
          <Form.Input name="email" placeholder="Seu e-mail" autoComplete="off" />
        </Form.Field>

        <Form.Field>
          <Form.Input name="password" type="password" placeholder="Sua senha" />
        </Form.Field>

        <Form.Buttons vertical>
          <Button type="submit" disabled={login.loading} large>
            {login.loading ? <Loading type="button" /> : 'Login'}
          </Button>

          <Button type="button" outline large>
            Cadastre-se
          </Button>
        </Form.Buttons>
      </Form>
    </Container>
  );
}

export default Login;
