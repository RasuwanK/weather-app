import { WeatherData } from "../interfaces/weather-data";

const client = () => typeof window !== "undefined";

export function getCache(): WeatherData {
  let data;
  if (client()) {
    if (localStorage.getItem("weather-data")) {
      data = JSON.parse(localStorage.getItem("weather-data")!);
    }
  }
  return data;
}

export function setCache(data: WeatherData | undefined) {
  if (client()) {
    if (data) {
      localStorage.setItem("weather-data", JSON.stringify(data));
    }
  }
}
