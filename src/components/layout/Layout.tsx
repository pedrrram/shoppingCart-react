import React, { FC, ReactNode } from 'react';
import Header from './header/Header';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="py-10 px-5">{children}</main>
    </div>
  );
};

export default Layout;
