import { list } from '@keystone-6/core';
import {
  decimal,
  integer,
  relationship,
  select,
  text,
} from '@keystone-6/core/fields';

const Product = list({
  // TODO
  // access
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILAVLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    price: decimal({
      scale: 2,
    }),
  },
});

export default Product;
