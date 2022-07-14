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

  if (isLocationLoading) {
    return (
      <Main>
        <p>Loading location</p>
      </Main>
    );
  } else {
    if (locationError?.PERMISSION_DENIED) {
      return (
        <Main>
          <p>Location permission error</p>
        </Main>
      );
    } else if (locationError?.POSITION_UNAVAILABLE) {
      return (
        <Main>
          <p>Location unvailable</p>
        </Main>
      );
    } else if (locationError?.TIMEOUT) {
      return (
        <Main>
          <p>Location timeout errro</p>
        </Main>
      );
    }
  }

  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>
      <div
        className={"grid grid-cols-1 w-full ".concat(`${theme.bg} ${theme.fg}`)}
      >
        <div className="" id="current-weather-container">
          <CurrentWeather
            main={data?.weather[0].main}
            temperature={data?.main.temp}
            description={data?.weather[0].description}
            weatherIcon={faSun}
          />
        </div>
      </div>
    </div>
  );
}
