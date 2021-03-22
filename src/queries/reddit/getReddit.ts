import endpoints from 'consts/endpoints';
import { requestAsync } from 'redux-query';

export default ({ redditName = 'reactjs', resultKey = 'posts' } = {}) =>
  requestAsync({
    url: endpoints.getRedditUrl({ redditName }),
    transform: (response) => ({
      [resultKey]: response.data.children,
    }),
    queryKey: endpoints.getRedditUrl(),
    // meta: {
    //   authToken: true
    // },
    options: {
      headers: {
        Accept: 'application/json',
      },
    },
    update: {
      [resultKey]: (_prevEntities, newEntities) => newEntities,
    },
  });
