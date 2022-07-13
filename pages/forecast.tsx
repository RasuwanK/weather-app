import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { ForecastPageProps } from "../interfaces/props";
import { MainContentProps } from "../interfaces/props";
import { useTheme } from "../hooks/useTheme";
import { CurrentWeather } from "../components/current-weather";
import { useEffect } from "react";
import { useLocation } from "../hooks/useLocation";

export default function Forecast({}: ForecastPageProps) {
  // Used to detect live location
  const { location, isLocationLoading, locationError } = useLocation();
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const theme = useTheme(data?.weather[0].id);

  return (
    <div>
      <Head>
        <title>Weather Forecast</title>
      </Head>
      <div
        className={"grid grid-cols-1 bg-repeat bg-cover w-full ".concat(
          `${theme.bg} ${theme.fg}`
        )}
      ></div>
    </div>
  );
}
