import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useLocation } from "../hooks/useLocation";
import { useClock } from "../hooks/useClock";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { location, isLocationLoading, locationError } = useLocation();
  //const time = useClock();

  const getGreeting = (hours: number | string) => {
    if (+hours >= 0 && +hours <= 12) {
      return "morning";
    } else if (+hours > 12 && +hours <= 17) {
      return "afternoon";
    } else if (+hours > 17 && +hours <= 19) {
      return "evening";
    } else if (+hours > 19 && +hours < 0) {
      return "night";
    }
  };

  return (
    <Layout
      time={time}
      isLocationLoading={isLocationLoading}
      locationError={locationError}
    >
      <Component
        {...pageProps}
        location={location}
        isLocationLoading={isLocationLoading}
        locationError={locationError}
      />
    </Layout>
  );
}

export default MyApp;
