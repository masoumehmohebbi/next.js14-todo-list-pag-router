import Link from "next/link";

export default function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <span className="btn">{children}</span>
      </Link>
    );
  }
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
