import { Link } from '@nextui-org/react';
import React from 'react';

const Footer = () => {
  return (
    <div className="p-5 text-tertiary bg-gray-200 flex items-center gap-2 justify-center">
      <p>ساخته شده توسط</p>
      <Link
        isBlock
        color="primary"
        className="font-bold"
        href="https://github.com/masoumehmohebbi"
      >
        م-م
      </Link>
    </div>
  );
};

export default Footer;
