import {Schema} from "jsonschema";

const schema: Schema = {
  type: 'array',
  items: {
    properties: {
      bill: {
        type: 'number',
        multipleOf: 500,
        minimum: 6000,
        maximum: 50000,
        required: true,
      },
      orientation: {
        type: 'string',
        required: true,
      },
      roof: {
        type: 'string',
        required: true,
      },
      results: {
        required: true,
        properties: {
          emission: {
            type: 'number',
            minimum: 0,
            required: true,
          },
          trees: {
            type: 'number',
            minimum: 0,
            required: true,
          },
          kwp: {
            type: 'number',
            minimum: 0,
            required: true,
          },
          yearlyKWH: {
            type: 'number',
            minimum: 0,
            required: true,
          },
          price: {
            type: 'number',
            minimum: 0,
            required: true,
          },
        },
      },
    },
  },
};

export default schema;
