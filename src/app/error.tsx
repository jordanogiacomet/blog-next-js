'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    // console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='The Blog | Internal Server Error'
      contentTitle='500'
      content='Internal Server Error ❌ | Tente novamente mais tarde.'
    />
  );
}
