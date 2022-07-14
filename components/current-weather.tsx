import { CurrentWeatherProps } from "../interfaces/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CurrentWeather({
  main,
  description,
  temperature,
  weatherIcon,
}: CurrentWeatherProps) {
  return (
    <article
      id="current-weather"
      className="grid grid-cols-2 grid-rows-1 max-w-[500px] p-3 w-full drop-shadow-md"
    >
      <section
        className="grid grid-cols-1 grid-rows-1 justify-items-center items-center"
        id="weather-icon"
      >
        <FontAwesomeIcon icon={weatherIcon} className="text-8xl" />
      </section>
      <section
        id="weather-description"
        className="grid grid-cols-1 grid-rows-3 items-center"
      >
        <div id="main" className="text-6xl">{main ? main : "..."}</div>
        <div id="description" className="text-3xl">{description ? description : "......."}</div>
        <div id="temperatue" className="text-2xl">{temperature ? temperature : "........"}</div>
      </section>
    </article>
  );
}
