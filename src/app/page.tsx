import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Fragment, Suspense } from 'react';

export default async function HomePage() {
  return (
    <Fragment>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Fragment>
  );
}
