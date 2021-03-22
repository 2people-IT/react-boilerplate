import { useMemo, useReducer } from 'react';
import { bindActionCreators } from 'redux';

const wrapActionsWithLoadState = (actions, isFetchingDispatch) =>
  Object.keys(actions).reduce(
    (acc, A) => ({
      ...acc,
      [A]: (args, { withFetching = true } = {}) => {
        if (withFetching) {
          isFetchingDispatch({ type: A, payload: true });
        }
        return actions[A](args).then((res) => {
          if (withFetching) {
            isFetchingDispatch({ type: A, payload: false });
          }
          return res;
        });
      },
    }),
    actions,
  );

const isFetchingReducer = (state, action) => ({
  ...state,
  [`${[action.type]}IsFetching`]: action.payload,
});

// custom reducer example
//
// const customReducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + 1 };
//     case 'decrement':
//       return { ...state, count: state.count + 1 };
//     default:
//       return isFetchingReducer(state, action);
//   }
// };

export default (actionCreators, dispatch, { reducer = isFetchingReducer, initialReducerState = {} } = {}) => {
  const actions = useMemo(() => bindActionCreators(actionCreators, dispatch), [actionCreators, dispatch]);

  const [isFetchingState, isFetchingDispatch] = useReducer(reducer, initialReducerState);

  const actionsWithIsFetching = useMemo(() => wrapActionsWithLoadState(actions, isFetchingDispatch), [
    actions,
    isFetchingDispatch,
  ]);

  return [actionsWithIsFetching, isFetchingState];
};
