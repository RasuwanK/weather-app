import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../hooks/useTheme";
import { CurrentWeather } from "../components/current-weather";
import { useLocation } from "../hooks/useLocation";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { WeatherData } from "../interfaces/weather-data";
import Image from "next/image";
import icon from '../public/weather.svg'

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
  }, [data]);

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
        <article className="weather-dashboard h-[500px] grid grid-cols-dashboard-lg">
          <section className="left bg-clear-day bg-cover bg-no-repeat grid grid-cols-1 gap-3 content-center justify-items-center font-open-sans">
            <div className="weather-icon">
              <Image alt="weather-icon" src={icon} />
            </div>
            <p className="main text-4xl font-bold text-[#736C6C]">
              {data?.weather[0].main || cachedData?.weather[0].main}
            </p>
            <p className="description font-bold text-lg text-[#736C6C]">
              {data?.weather[0].description ||
                cachedData?.weather[0].description}
            </p>
          </section>
          <section className="right"></section>
        </article>
      </div>
    </Fragment>
  );
}
