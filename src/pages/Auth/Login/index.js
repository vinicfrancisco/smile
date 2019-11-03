import React, { useState } from 'react';
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

const signUpSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

function Login() {
  const dispatch = useDispatch();

  const login = useSelector(state => state.auth.login);
  const register = useSelector(state => state.auth.register);

  const [signUp, setSignUp] = useState(false);

  function handleLogin(data) {
    dispatch(AuthActions.loginRequest(data));
  }

  function handleSignUp(data) {
    dispatch(AuthActions.registerRequest(data));
  }

  return (
    <Container>
      <Logo src={logo} />

      <Title>{signUp ? 'Cadastro' : 'Login'}</Title>

      {!signUp ? (
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

            <Button outline large type="button" onClick={() => setSignUp(true)}>
              Cadastre-se
            </Button>
          </Form.Buttons>
        </Form>
      ) : (
        <Form schema={signUpSchema} onSubmit={handleSignUp}>
          <Form.Field>
            <Form.Input name="username" placeholder="Seu nome" autoComplete="off" />
          </Form.Field>

          <Form.Field>
            <Form.Input name="email" placeholder="Seu e-mail" autoComplete="off" />
          </Form.Field>

          <Form.Field>
            <Form.Input name="password" type="password" placeholder="Sua senha" />
          </Form.Field>

          <Form.Buttons vertical>
            <Button type="submit" disabled={register.loading} large>
              {register.loading ? <Loading type="button" /> : 'Cadastrar'}
            </Button>

            <Button type="button" outline large onClick={() => setSignUp(false)}>
              Voltar
            </Button>
          </Form.Buttons>
        </Form>
      )}
    </Container>
  );
}

export default Login;
