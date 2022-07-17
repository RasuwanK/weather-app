import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../hooks/useTheme";
import { CurrentWeather } from "../components/current-weather";
import { useLocation } from "../hooks/useLocation";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { WeatherData } from "../interfaces/weather-data";

function Main({ children }: any) {
  return (
    <Fragment>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}

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

  useEffect(() => {
    const cache = localStorage.getItem("weather-data");
    setCachedData(JSON.parse(cache!));
  }, [data]);

  // In case if geolocation is not awailable in the browser
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

  // In case if location is loading or is not awailable
  if (isLocationLoading) {
    return (
      <Main>
        <p>Loading location</p>
      </Main>
    );
  } else {
    if (locationError?.code === 1) {
      return (
        <Main>
          <p>Location permission error</p>
        </Main>
      );
    } else if (locationError?.code === 2) {
      return (
        <Main>
          <p>Location unvailable</p>
        </Main>
      );
    } else if (locationError?.code === 3) {
      return (
        <Main>
          <p>Location timeout error</p>
        </Main>
      );
    }

    return (
      <Main>
        <div
          id="forecast-page"
          style={{
            backgroundImage: `linear-gradient(${theme.bg.from}, ${theme.bg.to})`,
          }}
        >
          <div id="status-bar" className="h-10 text-center bg-black text-white">
            {weatherError &&
              !isWeatherLoading &&
              "No internet can't fetch weather data"}
          </div>
          <CurrentWeather
            main={data?.weather[0].main || cachedData?.weather[0].main}
            description={
              data?.weather[0].description || cachedData?.weather[0].description
            }
            temperature={data?.main.temp || cachedData?.main.temp}
          />
          <article className="temp-table grid grid-cols-1">
            <section className="temp-table-title grid grid-cols-1">
              Temperature
            </section>
            <section className="temp-table-row grid grid-cols-2">
              <div className="temp-table-col">Minimum Temperature</div>
              <div className="temp-table-col">
                {data?.main.temp_min || cachedData?.main.temp_min}
              </div>
            </section>
            <section className="temp-table-row grid grid-cols-2">
              <div className="temp-table-col">Maximum Temperature</div>
              <div className="temp-table-col">
                {data?.main.temp_max || cachedData?.main.temp_max}
              </div>
            </section>
            <section className="temp-table-row grid grid-cols-2">
              <div className="temp-table-col">Current Temperature</div>
              <div className="temp-table-col">
                {data?.main.temp || cachedData?.main.temp}
              </div>
            </section>
            <section className="temp-table-row grid grid-cols-2">
              <div className="temp-table-col">Feels like</div>
              <div className="temp-table-col">
                {data?.main.feels_like || cachedData?.main.feels_like}
              </div>
            </section>
          </article>
          <article className="wind-table grid grid-cols-1">
            <section className="wind-table-title">Wind</section>
            <section className="wind-table-row grid grid-cols-2">
              <div className="wind-table-col">Wind speed</div>
              <div className="wind-table-col">
                {data?.wind.speed || cachedData?.wind.speed}
              </div>
            </section>
            <section className="wind-table-row grid grid-cols-2">
              <div className="wind-table-col">Wind direction</div>
              <div className="wind-table-col">
                {data?.wind.deg || cachedData?.wind.deg}
              </div>
            </section>
            <section className="wind-table-row grid grid-cols-2">
              <div className="wind-table-col">Gust</div>
              <div className="wind-table-col">
                {data?.wind.gust || cachedData?.wind.gust}
              </div>
            </section>
          </article>
        </div>
      </Main>
    );
  }
}
