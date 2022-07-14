import { CurrentWeatherProps } from "../interfaces/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={weatherIcon ? weatherIcon:  faCross} />
        </div>
        <div id="weather-text">{main ? main : '.....'}</div>
      </section>
      <section id="weather-description" className="">
        {description ? description : '................'}
      </section>
      <section id="temperature" className="">
        {temperature ? temperature : '.......'}
      </section>
    </article>
  );
}
