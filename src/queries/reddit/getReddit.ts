import { normalize } from 'normalizr';
import endpoints from 'consts/endpoints';
import { requestAsync } from 'redux-query';
import posts from 'schemas/posts';

export default ({ redditName = 'reactjs', resultKey = 'posts' } = {}) =>
  requestAsync({
    url: endpoints.getRedditUrl({ redditName }),
    transform: (response) => ({
      [resultKey]: normalize(response.data.children, posts.schemasArray),
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
