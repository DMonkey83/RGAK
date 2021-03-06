import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import 'dotenv/config';
import { relationship, text } from '@keystone-6/core/fields';

const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
        apiKey: process.env.CLOUDINARY_KEY || '',
        apiSecret: process.env.CLOUDINARY_SECRET || '',
        folder: 'sfitsev',
      },
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
});

export default ProductImage;
