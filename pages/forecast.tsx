import Head from "next/head";
import { Body } from "../components/body/body";
import { useLocation } from "../hooks/useLocation";
import useSwr from "swr";
import { useWeather } from "../hooks/useWeather";

export default function Forecast() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, timestamp } =
    useLocation();
  const { data, isWeatherLoading, weatherError } = useWeather(location);

  return (
    <div>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <Body>
        {location && <p>Location recieved</p>}
        {isLocationLoading && <p>Loading location</p>}
        {locationError && <p>Location Error</p>}
        {data && <p>{JSON.stringify(data, null, " ")}</p>}
        {isWeatherLoading && <p>Loading weather data</p>}
        {weatherError && <p>Error while obtaining data</p>}
      </Body>
    </div>
  );
}
