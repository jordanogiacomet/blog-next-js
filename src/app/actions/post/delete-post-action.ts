'use server';

import { drizzleDb } from '@/db/drizzle';
import { postsTables } from '@/db/drizzle/schemas';
import { asyncDelay } from '@/utils/async-dalay';
import { logColor } from '@/utils/log-color';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { findPostByIdAdmin } from '@/lib/post/queries/admin';

export async function deletePostAction(id: string) {
  // TODO: checar login do user

  // TODO: remover linhas abaixo
  await asyncDelay(500);
  logColor(id);

  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  const post = await findPostByIdAdmin(id).catch(() => undefined);

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
