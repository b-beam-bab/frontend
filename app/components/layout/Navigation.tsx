import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="py-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/delegate">Delegate</Link>
        </li>
        <li>
          <Link href="/validate">Validate</Link>
        </li>
      </ul>
    </nav>
  );
}
