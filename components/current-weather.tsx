import { CurrentWeatherProps } from "../interfaces/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CurrentWeather({
  main,
  description,
  temperature,
  weatherIcon,
}: CurrentWeatherProps) {
  return (
    <article id="current-weather" className="grid grid-cols-1 p-3">
      <section id="weather-main" className="grid">
        <div id="weather-icon">
          <FontAwesomeIcon icon={weatherIcon} />
        </div>
        <div id="weather-text">{main}</div>
      </section>
      <section id="weather-description" className="">
        {description}
      </section>
      <section id="temperature" className="">
        {temperature}
      </section>
    </article>
  );
}
