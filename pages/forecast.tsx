import Head from "next/head";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";

export default function Forecast() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, timestamp } =
    useLocation();
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const date = new Date(timestamp!);

  return (
    <div>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <div></div>
    </div>
  );
}
