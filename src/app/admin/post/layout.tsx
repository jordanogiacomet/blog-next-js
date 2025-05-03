import { MenuAdmin } from '@/components/Admin/MenuAdmin';
import { Fragment } from 'react';

type AdminPostLayout = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayout>) {
  return (
    <Fragment>
      <MenuAdmin />
      {children}
    </Fragment>
  );
}
