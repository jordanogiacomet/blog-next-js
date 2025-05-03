'use client';

import clsx from 'clsx';
import { CircleXIcon, FileTextIcon, HouseIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lgf',
    'flex flex-col',
    'mb-8',
    'sm:flex-row sm:flex-wrap',
    !isOpen && 'overflow-hidden',
    !isOpen && 'h-10',
    'sm:overflow-visible',
    'sm:h-auto',
  );
  const linkClasses = clsx(
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2 cursor-pointer',
    'transition hover:bg-slate-800',
    'h-10',
    'shrink-0',
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-200 italic sm:hidden',
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <Fragment>
            {' '}
            <HouseIcon />
            Menu
          </Fragment>
        )}
        {isOpen && (
          <Fragment>
            {' '}
            <CircleXIcon />
            Fechar
          </Fragment>
        )}
      </button>
      <a className={linkClasses} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href='/admin/post'>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href='/admin/post/new'>
        <PlusIcon />
        Criar Posts
      </Link>
    </nav>
  );
}
