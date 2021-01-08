import { actionTypes } from 'redux-query';

/**
 * Если передан meta.successCallback, он будет вызван.
 *
 * @return {void}
 */
export default () => (next) => (action) => {
  if (action.type === actionTypes.REQUEST_SUCCESS) {
    const { successCallback } = action.meta;

    if (successCallback) {
      successCallback(action.responseBody);
    }
  }

  return next(action);
};
