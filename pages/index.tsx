import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <div>
        <article>
          <p>Welcome the weather forecaster</p>
          <Link href="/forecast">
            <a>Get started</a>
          </Link>
        </article>
      </div>
    </div>
  );
}
