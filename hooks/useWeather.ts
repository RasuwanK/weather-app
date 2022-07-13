import useSWR from "swr";
import { WeatherData } from "../interfaces/weather-data";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());

export function useWeather(location: GeolocationCoordinates) {
  const generateUrl = (
    apiKey: string,
    longitude: string,
    latitude: string,
    units: string
  ) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  };
  const { data, error } = useSWR<WeatherData, any>(
    generateUrl(
      "edce4dcfe8fd9291e28d45aa56cac0c8",
      location?.longitude.toString(),
      location?.latitude.toString(),
      "metric"
    ),
    fetcher
  );
  return { data, isWeatherLoading: !data && !error, weatherError: error };
}
