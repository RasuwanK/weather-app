import Head from "next/head";
import { Body } from "../components/body/body";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <Body>
        <article>
          <p>Welcome the weather forecaster</p>
          <Link href="/forecast">
            <a>Get started</a>
          </Link>
        </article>
      </Body>
    </div>
  );
}
