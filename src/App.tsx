import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import HomeScreen from 'screens/HomeScreen';
import { store, history } from 'configureStore';
import routes from 'consts/routes';

export const getQueries = (state) => state.queries;

const App = () => (
  <Provider store={store}>
    <ReduxQueryProvider queriesSelector={getQueries}>
      <Router history={history}>
        <Switch>
          <Route path={routes.getBase()} component={HomeScreen} />
        </Switch>
      </Router>
    </ReduxQueryProvider>
  </Provider>
);

export default App;
