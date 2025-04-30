import { drizzleDb } from '.';
import { postsTables } from './schemas';

(async () => {
  const posts = await drizzleDb.select().from(postsTables);

  console.log(posts);
})();
