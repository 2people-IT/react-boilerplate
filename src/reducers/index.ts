import { combineReducers } from 'redux';
import { entitiesReducer, queriesReducer } from 'redux-query';

export const getQueries = (state) => state.queries;
export const getEntities = (state) => state.entities;

export default combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
});
