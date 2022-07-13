import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { ForecastPageProps } from "../interfaces/props";
import { MainContentProps } from "../interfaces/props";
import { useTheme } from "../hooks/useTheme";
import { CurrentWeather } from "../components/current-weather";
import { useEffect } from "react";

export default function Forecast({
  location,
  isLocationLoading,
  locationError,
  timestamp,
}: ForecastPageProps) {
  // Used to detect live location
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
