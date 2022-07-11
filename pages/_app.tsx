import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useState } from "react";
import { useLocation } from "../hooks/useLocation";

enum Greeting {
  morning = "Good Morning",
  evening = "Good Evening",
  afternoon = "Good Afternoon",
  night = "Good night",
}

function MyApp({ Component, pageProps }: AppProps) {
  const { location, isLocationLoading, locationError, timestamp } =
    useLocation();
  const date = new Date();
  return (
    <Layout>
      <Component
        {...pageProps}
        location={location}
        isLocationLoading={isLocationLoading}
        locationError={locationError}
        timestamp={timestamp}
      />
    </Layout>
  );
}

export default MyApp;
