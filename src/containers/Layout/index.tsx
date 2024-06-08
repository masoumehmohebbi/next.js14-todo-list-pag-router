import React from 'react';
import Header from '@/containers/Layout/Header';
import Footer from '@/containers/Layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
