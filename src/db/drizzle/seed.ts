import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTables } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTables).values(posts);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`${posts.length} posts foram salvados na base de dados`);
  }
})();
