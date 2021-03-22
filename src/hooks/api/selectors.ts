import { getEntities, getUtils } from 'reducers';

const getSimpleResult = (initialValue: any) => (state: object, resultKey: string) =>
  getEntities(state)[resultKey] ?? initialValue;

export const objectSelector = getSimpleResult({});
export const arraySelector = getSimpleResult([]);

export const primitiveSelector = (state: object, resultKey: string, initialValue?: any) =>
  getEntities(state)[resultKey] ?? initialValue;

export const utilsSelector = (state: object, resultKey: string, initialValue?: any) =>
  getUtils(state)[resultKey] ?? initialValue;
