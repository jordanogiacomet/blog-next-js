import { ManagePostForm } from '@/components/Admin/ManagePostForm';
import { Fragment } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <Fragment>
      <h1>Criar Post</h1>
      <ManagePostForm />
    </Fragment>
  );
}
