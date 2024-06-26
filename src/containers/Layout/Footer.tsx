import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="p-5 text-tertiary bg-gray-200  dark:bg-slate-700 flex items-center gap-2 justify-center">
      <p>ساخته شده توسط</p>
      <Link
        color="primary"
        className="font-bold link-nextUI dark:text-primary-900"
        href="https://github.com/masoumehmohebbi"
      >
        م-م
      </Link>
    </div>
  );
};

export default Footer;
