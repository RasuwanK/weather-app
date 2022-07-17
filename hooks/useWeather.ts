import useSWR from "swr";
import { WeatherData } from "../interfaces/weather-data";
import { getCache, setCache } from "../lib/cache";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error while fetching data");
  }

  return data;
};

// Used to generate the API end point
const getURL = (
  apiKey: string,
  longitude: string | undefined,
  latitude: string | undefined,
  units: string
) => {
  if (typeof longitude !== "undefined" || typeof latitude !== "undefined") {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  }
};

// This hook fetches and caches the current weather data
export function useWeather(location: GeolocationCoordinates | undefined) {
  const { data, error } = useSWR<WeatherData, any>(
    getURL(
      "edce4dcfe8fd9291e28d45aa56cac0c8",
      location?.longitude.toString(),
      location?.latitude.toString(),
      "metric"
    ),
    fetcher
  );

  setCache(data);

  return {
    data: data ? data : getCache(),
    isWeatherLoading: !data && !error,
    weatherError: typeof location === "undefined" || error,
  };
}
