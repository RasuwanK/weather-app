import { CurrentWeatherProps } from "../interfaces/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CurrentWeather({
  main,
  description,
  temperature,
  weatherIcon,
}: CurrentWeatherProps) {
  return (
    <article id="current-weather" className="">
      <section id="weather-main">
        <div id="weather-icon">
            <FontAwesomeIcon icon={weatherIcon} />
        </div>
        <div id="weather-text">
            {main}
        </div>
      </section>
      <section id="weather-description">{description}</section>
      <section id="temperature">{temperature}</section>
    </article>
  );
}
