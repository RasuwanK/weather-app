import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../hooks/useTheme";
import { CurrentWeather } from "../components/current-weather";
import { useLocation } from "../hooks/useLocation";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

function Main({ children }: any) {
  return (
    <div>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}

export default function Forecast() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const theme = useTheme(data?.weather[0].id);

  useEffect(() => {
    console.log("Rendered !");
  });

  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

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
    } else {
      if (isWeatherLoading) {
        <Main>
          <p>Weather data is loading</p>
        </Main>;
      } else if (weatherError) {
        <Main>
          <p>Weather data {`couldn't`} fetch</p>
        </Main>;
      }
    }
  }

  return (
    <Main>
      <div id="current-weather-container" className="w-full">
        <CurrentWeather
          main={data?.weather[0].main}
          temperature={data?.main.temp}
          description={data?.weather[0].description}
          weatherIcon={faSun}
        />
      </div>
    </Main>
  );
}
