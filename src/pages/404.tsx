import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>صفحه یافت نشد</h1>
      <Link href="/">
        <a>صفحه اصلی؟</a>
      </Link>
    </div>
  );
};

export default NotFound;
