import Link from "next/link";

export default function Button({ link, children }) {
  return (
    <Link href={link}>
      <span className="bg-blue-300">{children}</span>
    </Link>
  );
}
