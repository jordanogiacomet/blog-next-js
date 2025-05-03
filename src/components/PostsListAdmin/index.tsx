import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostButton } from '../Admin/DeletePostButton';

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className='mb-16'>
      {posts.map(post => {
        return (
          <div
            className={clsx(
              'py-2 px-2',
              !post.published && 'bg-slate-400',
              'flex gap-2 items-center justify-between',
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className='text-xs text-slate-600 italic'>
                (Não publicado)
              </span>
            )}
            <DeletePostButton title={post.title} id={post.id} />
          </div>
        );
      })}
      <div
        className={clsx(
          'fixed z-50 bg-black/50 backdrop-blur-xs inset-0',
          'flex items-center justify-center',
        )}
      >
        <div
          className={clsx(
            'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
            'flex flex-col gap-6',
            'shadow-lg shadow-black/30 text-center',
          )}
        >
          <h3 className='text-xl font-extrabold'>Título do diálogo</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quo
            blanditiis deserunt tempora dolorem laboriosam explicabo, numquam,
            rem illum eveniet facilis, molestiae obcaecati aperiam. Maxime et
            doloremque est sit minima?
          </p>
          <div className='flex items-center justify-around'>
            <button
              className={clsx(
                'bg-slate-300 text-slate-950 hover:bg-slate-400 transition',
                'flex items-center justify-center',
                'py-2 px-4 rounded-lg cursor-pointer',
              )}
              autoFocus
            >
              Cancelar
            </button>
            <button
              className={clsx(
                'bg-blue-500 text-blue-50 hover:bg-blue-600 transition',
                'flex items-center justify-center',
                'py-2 px-8 rounded-lg cursor-pointer',
              )}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
