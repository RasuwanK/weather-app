import useSWR from "swr";
import { WeatherData } from "../interfaces/weather-data";
import { getCache, setCache } from "../lib/cache";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());

const generateUrl = (
  apiKey: string,
  longitude: string | undefined,
  latitude: string | undefined,
  units: string
) => {
  if (typeof location !== "undefined") {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  } else {
    ("");
  }
};

export function useWeather(location: GeolocationCoordinates | undefined) {
  const { data, error } = useSWR<WeatherData, any>(
    generateUrl(
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
