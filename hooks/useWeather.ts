import { useEffect } from "react";
import useSWR from "swr";
import { WeatherData } from "../interfaces/weather-data";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error while fetching data");
  }

  const data = await res.json();
  return data;
};

// This hook fetches and caches the current weather data
export function useWeather(location: GeolocationCoordinates | undefined) {
  const units = "metric";
  const apiKey = "edce4dcfe8fd9291e28d45aa56cac0c8";
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude.toString()}&lon=${location?.longitude.toString()}&units=${units}&appid=${apiKey}`,
    fetcher
  );

  console.log(data, error);

  return {
    data: data,
    isWeatherLoading: !data && !error,
    weatherError: error,
  };
}
