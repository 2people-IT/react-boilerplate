import { UPDATE_UTILS } from 'actions/types';

const initialState = {};

export default (state = initialState, action: { type: string; payload: object }) => {
  if (action.type === UPDATE_UTILS) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
