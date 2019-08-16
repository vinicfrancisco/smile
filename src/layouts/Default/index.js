import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';
import { Creators as UsersActions } from '~/store/ducks/users';

import { Header, AppHeader, Loading } from './components';

import { global as Global } from '~/assets/styles';
import { Container } from './styles';

export default Page =>
  function Auth(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.logged);
    const logout = useSelector(state => state.auth.logout);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
      setTimeout(() => dispatch(UsersActions.getUserLoggedRequest()), 1000);
    }, []);

    useEffect(() => {
      if (!user.loading) {
        setLoaded(!user.loading);
        setTimeout(() => setLoading(false), 400);
      }
    }, [user.loading]);

    useEffect(() => {
      if (!loading) {
        setTimeout(() => setDone(true), 300);
      }
    }, [loading]);

    return (
      <>
        <Global.Styles />
        {loading ? (
          <Loading loaded={loaded} />
        ) : (
          <Container logouting={logout.loading}>
            <div>
              <Header {...props} />
              <AppHeader {...props} />

              {done && <Page {...props} />}
            </div>
          </Container>
        )}
      </>
    );
  };
