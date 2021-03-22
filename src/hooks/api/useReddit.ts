import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getReddit from 'queries/reddit/getReddit';
import useActionsWithFetchingState from '../useActionsWithFetchingState';
import { arraySelector } from './selectors';

const useReddit = () => {
  const selector = useCallback(
    (state) => ({
      redditPosts: arraySelector(state, 'posts'),
    }),
    [],
  );

  const dispatch = useDispatch();

  const data = useSelector(selector);

  const actionCreators = useMemo(
    () => ({
      getReddit,
    }),
    [],
  );

  const [actions, isFetchingState] = useActionsWithFetchingState(actionCreators, dispatch);

  return {
    ...data,
    ...actions,
    ...isFetchingState,
  };
};

export default useReddit;
