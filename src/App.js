import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import '~/config/Reactotron';
import '~/config/yup';
import '~/assets/css/sweatalert.css';

import store from '~/store';
import Router from '~/routes';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default hot(App);
