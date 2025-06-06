import clsx from 'clsx';
import React, { Fragment } from 'react';

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle = '',
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <Fragment>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          'min-h-[440px] bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex items-center justify-center',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-7xl/tight mb-4 font-extrabold'>{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </Fragment>
  );
}
