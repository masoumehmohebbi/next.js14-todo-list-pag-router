import React from 'react';
import Header from '@/containers/Layout/Header';
import Footer from '@/containers/Layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'اپلیکیشن برنامه ریزی',
  description: 'The Todolist app, built with App Router.',
  metadataBase: new URL('http://localhost/:3000'),
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-800">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
