import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { CurrentWeatherProps } from "../interfaces/props";
import { WeatherData } from "../interfaces/weather-data";

export function CurrentWeather({
  main,
  description,
  temperature,
  weatherIcon,
}: CurrentWeatherProps) {
  const {cache} = useSWRConfig();
  return (
    <article
      id="current-weather"
      className="grid grid-cols-2 grid-rows-1 max-w-[500px] p-3 w-full drop-shadow-md font-open-sans"
    >
      <section
        className="grid grid-cols-1 grid-rows-1 justify-items-center items-center"
        id="weather-icon"
      ></section>
      <section
        id="weather-description"
        className="grid grid-cols-1 grid-rows-3 items-center"
      >
        <div id="main" className="text-6xl">
          {main}
        </div>
        <div id="description" className="text-3xl">
          {description}
        </div>
        <div id="temperatue" className="text-2xl">
          {temperature}
        </div>
      </section>
    </article>
  );
}
