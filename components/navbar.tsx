import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="navbar" className="w-full z-10 p-6 grid fixed t-0">
      <section className="nav-links grid grid-rows-1 grid-cols-3 gap-2">
        <Link href="/">
          <a className="text-center font-open-sans p-3">Home</a>
        </Link>
        <Link href="/forecast">
          <a>Forecast</a>
        </Link>
        <Link href="/about-us">
          <a>About us</a>
        </Link>
      </section>
    </nav>
  );
}
