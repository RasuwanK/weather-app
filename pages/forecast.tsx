import Head from "next/head";
import { MainForecast } from "../components/main-forecast";
import { useWeather } from "../hooks/useWeather";
import { ForecastPageProps } from "../interfaces/props";
import { MainContentProps } from "../interfaces/props";

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
        <title>Weather Forecast</title>
      </Head>
      <div className="grid grid-cols-1 bg-green-800 bg-repeat bg-cover w-full">
        {!locationError && location && <MainForecast data={data} />}
      </div>
    </div>
  );
}
