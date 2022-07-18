import { CurrentWeatherProps } from "../interfaces/props";

export function CurrentWeather({
  main,
  description,
  temperature,
  weatherIcon,
}: CurrentWeatherProps) {
  return (
    <article
      id="current-weather"
      className="grid grid-cols-2 grid-rows-1 max-w-[500px] p-10 ml-6 drop-shadow-md backdrop-blur-lg bg-[#cad5e39f] font-open-sans rounded-lg"
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
