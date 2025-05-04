'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');
  return (
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

        <MarkdownEditor
          labelText='Content'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />

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
  );
}
