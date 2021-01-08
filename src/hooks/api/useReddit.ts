import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import endpoints from 'consts/endpoints';
import { querySelectors } from 'redux-query';
import { useDispatch, useSelector } from 'react-redux';
import { getRedditPosts } from 'selectors';
import getReddit from 'queries/reddit/getReddit';

const useReddit = () => {
  const redditState = useSelector((state) => ({
    redditPosts: getRedditPosts(state, 'posts'),
    redditIsFetching: querySelectors.isPending(state.queries, {
      url: endpoints.getRedditUrl(),
    }),
  }));

  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          getReddit,
        },
        dispatch,
      ),
    [dispatch],
  );

  return {
    ...redditState,
    ...actions,
  };
};

export default useReddit;
