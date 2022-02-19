import { list } from '@keystone-6/core';
import { password, text } from '@keystone-6/core/fields';

const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      isIndexed: 'unique',
      validation: { isRequired: true },
    }),
    password: password({ validation: { isRequired: true } }),
  },
});

export default User;
