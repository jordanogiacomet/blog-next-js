import { InputText } from '@/components/InputText';
import { Fragment } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <Fragment>
      <div className='flex flex-col gap-6'>
        <InputText labelText='Nome' placeholder='Digite seu nome' />
        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
          defaultValue={'Com Texto'}
        />
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
          defaultValue={'Read Only'}
          readOnly
        />
      </div>
    </Fragment>
  );
}
