'use server';

import { logColor } from '@/utils/log-color';

export async function uploadImageAction() {
  logColor('UploadImageAction');

  return {
    user: 'SENHA',
  };
}
