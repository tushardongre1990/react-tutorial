import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/cabins">Cabin</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your Account</Link>
      </li>
    </ul>
  );
}
