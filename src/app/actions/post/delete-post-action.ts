'use server';

import { revalidateTag } from 'next/cache';
import { postRepository } from '@/repositories/post';

export async function deletePostAction(id: string) {
  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
      return {
        error: 'Erro desconhecido',
      };
    }
  }

  revalidateTag('posts');
  revalidateTag(`post-${post?.slug}`);

  return {
    error: '',
  };
}
