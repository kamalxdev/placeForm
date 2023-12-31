import Link from "next/link";

export default function AuthSection() {
  return (
    <>
      <Link
        href="/register"
        className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Register
      </Link>
      <Link
        href="/login"
        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Log In
      </Link>
    </>
  );
}
