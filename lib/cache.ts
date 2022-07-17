import { WeatherData } from "../interfaces/weather-data";

// Simple check for the client side
const client = () => typeof window !== "undefined";

// This retrieves what useWeather has cached
export function getCache(): WeatherData {
  let data;
  if (client()) {
    if (localStorage.getItem("weather-data")) {
      data = JSON.parse(localStorage.getItem("weather-data")!);
    }
  }
  return data;
}

// This set the caching of useWeather hook
export function setCache(data: WeatherData | undefined) {
  if (client()) {
    if (data) {
      localStorage.setItem("weather-data", JSON.stringify(data));
    }
  }
}
