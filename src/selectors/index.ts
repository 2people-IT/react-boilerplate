import { getEntities } from 'reducers';
import { denormalize, schema as normalizrSchema } from 'normalizr';
import posts from 'schemas/posts';

const getDenormalizedEntity = (schema: normalizrSchema.Entity | normalizrSchema.Array, isArray = false) => (
  state,
  resultKey,
) =>
  denormalize(
    getEntities(state)[resultKey]?.result || (isArray ? [] : {}),
    schema,
    getEntities(state)[resultKey]?.entities,
  );

export const getRedditPosts = getDenormalizedEntity(posts.schemasArray, true);
