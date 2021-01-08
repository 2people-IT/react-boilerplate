import _ from 'lodash';
import { actionTypes } from 'redux-query';
import { getToken } from 'helpers/token';

/**
 * Add Authorization header to api action
 *
 * @return {void}
 */
export default () => (next) => (action) => {
  if (
    (_.isEqual(action.type, actionTypes.REQUEST_ASYNC) || _.isEqual(action.type, actionTypes.MUTATE_ASYNC)) &&
    action.meta.authToken
  ) {
    const callAPI = action;
    delete callAPI.meta.authToken;
    const userToken = getToken();

    if (userToken) {
      callAPI.options.headers = {
        ...callAPI.options.headers,
        Authorization: `Bearer ${userToken}`,
      };
    }
    return next(action);
  }
  return next(action);
};
