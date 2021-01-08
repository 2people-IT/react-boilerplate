import { actionTypes } from 'redux-query';

/**
 * Если передан meta.errorCallback, он будет вызван.
 *
 * @return {void}
 */
export default () => (next) => (action) => {
  if (action.type === actionTypes.REQUEST_FAILURE) {
    // if (action.status === 401) {
    //   token.removeToken();
    // }
    const { errorCallback } = action.meta;

    if (errorCallback) {
      errorCallback(action.responseBody);
    }
  }

  return next(action);
};
