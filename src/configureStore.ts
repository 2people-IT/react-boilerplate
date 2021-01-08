import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from 'redux-query';
import logger from 'redux-logger';
import reducers, { getQueries, getEntities } from 'reducers';
import superagentInterface from 'redux-query-interface-superagent';
import { createBrowserHistory } from 'history';
import requestStartMiddleware from './middlewares/requestStartMiddleware';
import authTokenMiddleware from './middlewares/authTokenMiddleware';
import requestFailureMiddleware from './middlewares/requestFailureMiddleware';
import requestSuccessMiddleware from './middlewares/requestSuccessMiddleware';

const configureStore = () => {
  let customMiddlewares = [
    requestStartMiddleware,
    authTokenMiddleware,
    requestFailureMiddleware,
    requestSuccessMiddleware,
    queryMiddleware(superagentInterface, getQueries, getEntities),
  ];

  if (process.env.NODE_ENV !== 'production') {
    customMiddlewares = [...customMiddlewares, logger];
  }

  const middlewares = applyMiddleware(...customMiddlewares);

  return createStore(reducers, middlewares);
};

export const history = createBrowserHistory();
export const store = configureStore();
