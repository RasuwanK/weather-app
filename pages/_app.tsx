import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useLocation } from "../hooks/useLocation";

function MyApp({ Component, pageProps }: AppProps) {
  const { location, isLocationLoading, locationError, timestamp } =
    useLocation();
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
