'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />
        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerada automaticamente'
          type='text'
          defaultValue={''}
          readOnly
        />
        <InputText
          labelText='Título'
          name='title'
          placeholder='Digite o título'
          type='text'
          defaultValue={''}
        />

        <InputText
          labelText='Autor'
          name='author'
          placeholder='Digite o nome do autor'
          type='text'
          defaultValue={''}
        />
        <InputText
          labelText='Resumo'
          name='excerpt'
          placeholder='Digite o resumo'
          type='text'
          defaultValue={''}
        />
        <MarkdownEditor
          labelText='Conteúdo'
          value={contentValue}
          setValue={setContentValue}
          textAreaName='content'
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText='URL da imagem de capa'
          name='excerpt'
          placeholder='Digite a URL da imagem'
          type='text'
          defaultValue={''}
        />

        <InputCheckbox labelText='Publicar?' name='published' type='checkbox' />

        <div>
          <Button type='submit' size='lg' className='w-full mt-6'>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
