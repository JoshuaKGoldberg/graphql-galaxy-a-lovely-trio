import Link from "next/link";

export default function WithLink() {
  return (
    <main>
      <h1>Linking!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </main>
  );
}
