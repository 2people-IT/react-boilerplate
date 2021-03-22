import { combineReducers } from 'redux';
import { entitiesReducer, queriesReducer, QueriesState } from 'redux-query';

import utilsReducer from './utilsReducer';

export const getQueries: any = (state: QueriesState) => state.queries;
export const getEntities: any = (state: QueriesState) => state.entities;
export const getUtils: any = (state: any) => state.utils;

export default combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
  utils: utilsReducer,
});
