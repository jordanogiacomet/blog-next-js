import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <section className='grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className='group flex flex-col gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
            />
            <PostSummary
              title={post.title}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              postLink={postLink}
              postHeading='h2'
            />
          </div>
        );
      })}
    </section>
  );
}
