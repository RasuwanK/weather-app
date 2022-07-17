import { useState } from "react";
import useSWR from "swr";
import { WeatherData } from "../interfaces/weather-data";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());

export function useWeather(location: GeolocationCoordinates | undefined) {
  const generateUrl = (
    apiKey: string,
    longitude: string | undefined,
    latitude: string | undefined,
    units: string
  ) => {
    if (typeof location !== "undefined") {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    }
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

  if (typeof window !== "undefined") {
    if (typeof data !== "undefined") {
      if (localStorage.getItem("weather-data")) {
        if (
          JSON.parse(localStorage.getItem("weather-data")!).id !==
          data.weather[0].id
        )
          localStorage.setItem("weather-data", JSON.stringify(data.weather[0]));
      } else {
        localStorage.setItem("weather-data", "pending");
      }
    }
  }

  return {
    data,
    isWeatherLoading: !data && !error,
    weatherError: typeof location === "undefined" || error,
  };
}
