import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { Fragment } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <Fragment>
      <form action='' className='mb-16'>
        <div className='flex flex-col gap-6'>
          <InputText labelText='Nome' placeholder='Digite seu nome' />
          <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
          <InputText
            disabled
            labelText='Sobrenome'
            placeholder='Digite seu sobrenome'
            defaultValue={'Com Texto'}
          />

          <InputCheckbox type='checkbox' />

          <InputText
            disabled
            labelText='Sobrenome'
            placeholder='Digite seu sobrenome'
            defaultValue={'Read Only'}
            readOnly
          />
          <div>
            <Button type='submit' size='lg' className='w-full mt-6'>
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
