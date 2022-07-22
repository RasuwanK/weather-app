import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../hooks/useTheme";
import { useLocation } from "../hooks/useLocation";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { WeatherData } from "../interfaces/weather-data";
import { WeatherDashboard } from "../components/weather-dashboard";

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);

  // Cached data values
  const [cachedData, setCachedData] = useState<WeatherData>();

  // Theming system based on the current climate
  const theme = useTheme(data?.weather[0].id || cachedData?.weather[0].id);

  // Each time the data changes this cached data is set
  useEffect(() => {
    const cache = localStorage.getItem("weather-data");
    setCachedData(JSON.parse(cache!));
  }, []);

  // In case if geolocation is not awailable in the browser
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{"Today's"} forecast</title>
      </Head>
      <div className="pt-32">
        {isLocationLoading && 'Loading location'}
        {isWeatherLoading && 'Loading weather'}
        <WeatherDashboard theme={theme} data={data} cachedData={cachedData} />
      </div>
    </Fragment>
  );
}
