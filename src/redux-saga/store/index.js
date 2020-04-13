import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import middleware, { sagaMiddleware } from './middleware';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index';


const reducer = persistReducer(
    {
      key: 'rrsb', // key is required
      storage, // storage is now required
      whitelist: [ 'home' ],
    },
    combineReducers({ ...rootReducer }),
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
  const store =
    createStore(
      reducer,
      initialState,
      composeEnhancer(applyMiddleware(...middleware))
    );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(require('reducers').default);
    });
  }

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();
global.store = store;

export { store, persistor };
