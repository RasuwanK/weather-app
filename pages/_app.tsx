import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useLocation } from "../hooks/useLocation";
import { useClock } from "../hooks/useClock";

function MyApp({ Component, pageProps }: AppProps) {
  const { location, isLocationLoading, locationError, timestamp } =
    useLocation();
  const time = useClock();
  return (
    <Layout time={time}>
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
