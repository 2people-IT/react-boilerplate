import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import HomeScreen from 'screens/HomeScreen';
import { store, history } from 'configureStore';
import routes from 'consts/routes';
import { createUseStyles } from 'react-jss';

export const getQueries = (state) => state.queries;

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
      '&:focus': {
        outline: 'none',
      },
    },
    button: {
      background: 'none',
      border: 0,
      '&:focus': {
        outline: 'none',
      },
    },
    input: {
      border: 0,
      '&:focus': {
        outline: 'none',
      },
      '&:invalid': {
        boxShadow: 'none',
      },
    },
    textarea: {
      '&:focus': {
        outline: 'none',
      },
    },
  },
});

const App = () => {
  useStyles();
  return (
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
};

export default App;
