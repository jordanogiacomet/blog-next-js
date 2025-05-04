'use server';

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOAD_DIRECTORY,
  IMAGE_UPLOAD_MAX_SIZE,
} from '@/lib/constants';
import { asyncDelay } from '@/utils/async-dalay';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  // TODO: remover delay
  await asyncDelay(3000, true);

  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos' });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido' });
  }
  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: 'O tamanho máximo para imagens é 900KB' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadFullPath = resolve(
    process.cwd(),
    'public',
    IMAGE_UPLOAD_DIRECTORY,
  );

  await mkdir(uploadFullPath, { recursive: true });
  const fileArrayBuffer = await file.arrayBuffer();

  const buffer = Buffer.from(fileArrayBuffer);
  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url: url });
}
