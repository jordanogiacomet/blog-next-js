'use server';

import { drizzleDb } from '@/db/drizzle';
import { postsTables } from '@/db/drizzle/schemas';
import { postRepository } from '@/repositories/post';
import { asyncDelay } from '@/utils/async-dalay';
import { logColor } from '@/utils/log-color';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  // TODO: checar login do user

  // TODO: remover linhas abaixo
  await asyncDelay(1000);
  logColor(id);

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: 'Post não existe!',
    };
  }

  // TODO: mover esse método para o repositório;
  await drizzleDb.delete(postsTables).where(eq(postsTables.id, id));

  // TODO: revalidate tag ou revalidate path
  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
