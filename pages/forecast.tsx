import Head from "next/head";
import { useEffect } from "react";
import { Body } from "../components/body/body";
import { useLocation } from "../hooks/useLocation";

export default function Forecast() {
  // Used to detect live location
  const { location, isLoading, error, timestamp } = useLocation();

  return (
    <div>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <Body></Body>
    </div>
  );
}
