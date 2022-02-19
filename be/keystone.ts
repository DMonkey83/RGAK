import { config } from '@keystone-6/core';
import 'dotenv/config';
// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import lists from './schemas/schema';
// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';

export default withAuth(
  config({
    server: {
      cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL || '',
      onConnect: async (context) => {
        // console.log('context', context);
      },
      // Optional advanced configuration
      enableLogging: true,
      useMigrations: true,
      idField: { kind: 'uuid' },
      // TODO: Add data seeding here
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
