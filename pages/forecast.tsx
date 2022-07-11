import Head from "next/head";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";
import { ForecastPageProps } from "../interfaces/props";

export default function Forecast({
  location,
  isLocationLoading,
  locationError,
  timestamp,
}: ForecastPageProps) {
  // Used to detect live location
  const { data, isWeatherLoading, weatherError } = useWeather(location);

  return (
    <div>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <div>
        <article id="main-forecast" className="">
          <section id="main-section">
            <div id="weather-text">{data?.weather[0].main}</div>
            <div id="weather-description-text">
              {data?.weather[0].description}
            </div>
            <div id="temp-text">Temperature {data?.main.temp}</div>
            <div id="temp-feels-text">Feels Like {data?.main.feels_like}</div>
          </section>
        </article>
      </div>
    </div>
  );
}
