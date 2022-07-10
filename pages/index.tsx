import Head from "next/head";
import { useEffect, useState } from "react";
import { Body } from "../components/body/body";
import { getLocation } from "../lib/location";

interface Cords {
  latitude?: number;
  longitude?: number;
}

export default function Home() {
  const [location] = useState<Cords>({
    latitude: undefined,
    longitude: undefined,
  });

  // Everytime user refreshes homepage updates
  useEffect(() => {
     
  }, []);



  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <Body>
        <article>
          <p>Welcome the weather forecaster</p>
        </article>
      </Body>
    </div>
  );
}
