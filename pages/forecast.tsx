import Head from "next/head";
import { MainForecast } from "../components/main-forecast";
import { useWeather } from "../hooks/useWeather";
import { ForecastPageProps } from "../interfaces/props";
import { MainContentProps } from "../interfaces/props";

function MainContent({
  isLocationLoading,
  locationError,
  isWeatherLoading,
  data,
  weatherError,
}: MainContentProps) {
  if (isLocationLoading) {
    return <p>Waiting for location</p>;
  }

  if (locationError) {
    <p>
      Sorry to say that, without location service we are unable to provide your
      weather forecast
    </p>;
  }

  return (
    <div>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <div className="bg-clear-sky-day bg-contain bg-no-repeat">
        {!isWeatherLoading && !weatherError && <MainForecast data={data} />}
      </div>
    </div>
  );
}

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
      <div>
        <MainContent
          isLocationLoading={isLocationLoading}
          locationError={locationError}
          isWeatherLoading={isWeatherLoading}
          data={data}
          weatherError={weatherError}
        />
      </div>
    </div>
  );
}
