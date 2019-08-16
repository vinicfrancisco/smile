import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import sagas from '~/store/sagas';
import createRootReducer from '~/store/ducks';
import history from '~/routes/history';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer(),
      )
    : applyMiddleware(...middlewares);

const store = createStore(createRootReducer(history), composer);
sagaMiddleware.run(sagas);

export default store;
