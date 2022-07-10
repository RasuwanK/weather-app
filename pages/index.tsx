import Head from "next/head";
import { Body } from "../components/body/body";
import Link from "next/link";

interface Cords {
  latitude?: number;
  longitude?: number;
}

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
