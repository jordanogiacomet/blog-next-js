import { Button } from '@/components/Button';
import { BugIcon } from 'lucide-react';
import { Fragment } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <Fragment>
      <div className='py-16 flex gap-4 flex-wrap items-center'>
        <Button variant='default' size='sm'>
          <BugIcon />
          Confirma
        </Button>
        <Button variant='ghost' size='md'>
          <BugIcon />
          Confirma
        </Button>
        <Button variant='danger' size='lg'>
          <BugIcon />
          Confirma
        </Button>
      </div>
      <div className='py-16 flex gap-4 flex-wrap items-center'>
        <Button disabled variant='default' size='sm'>
          <BugIcon />
          Confirma
        </Button>
        <Button disabled variant='ghost' size='md'>
          <BugIcon />
          Confirma
        </Button>
        <Button disabled variant='danger' size='lg'>
          <BugIcon />
          Confirma
        </Button>
      </div>
    </Fragment>
  );
}
