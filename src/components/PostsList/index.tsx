import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='flex flex-col gap-8'>
      {posts.map(post => {
        return (
          <div className='flex flex-col gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{ href: `/post/${post.slug}` }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
            />
            <div className='flex flex-col gap-4 sm:justify-center'>
              <time
                className='text-slate-600 text-sm/tight'
                dateTime='2025-04-20'
              >
                20/04/2025 10:00
              </time>
              <PostHeading as='h2' url='#'>
                Lorem, ipsum dolor sit amet consectetur
              </PostHeading>
              <p>
                {' '}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                architecto minus blanditiis harum excepturi delectus libero
                velit odio recusandae saepe impedit aut natus necessitatibus
                quos, reprehenderit consectetur deleniti temporibus quibusdam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
