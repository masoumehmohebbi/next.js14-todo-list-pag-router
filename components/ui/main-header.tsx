import Link from "next/link";

export default function MainHeader() {
  return (
    <nav className="bg-pink-400 sticky top-0 w-full">
      <div className="flex items-center justify-between py-4 container mx-auto">
        <div>
          <Link href="/">Next Events</Link>
        </div>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
