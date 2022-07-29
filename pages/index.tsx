import Head from "next/head";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="">
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
