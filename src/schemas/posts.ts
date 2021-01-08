import { schema as normalizrSchema } from 'normalizr';

// Usually third argument is useless,
// when normalize object is kind of
// {
//   'id': 1,
//   'prop1': 'key1',
//   'prop2': 'key2',
//   ...
// }
const schema: normalizrSchema.Entity = new normalizrSchema.Entity(
  'posts',
  {},
  {
    idAttribute: (entity) => entity.data.id,
    processStrategy: (value) => value.data,
  },
);
const schemasArray: normalizrSchema.Array = new normalizrSchema.Array(schema);

export default {
  schema,
  schemasArray,
};
