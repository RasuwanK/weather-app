import { MainForecastProps } from "../interfaces/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export function MainForecast({ data }: MainForecastProps) {
  if (data) {
    return (
      <article
        id="main-forecast"
        className="grid grid-cols-1 grid-rows-1 m-5 p-10 backdrop-blur-sm bg-[#343632ce] rounded-lg text-[#13130c] drop-shadow-lg"
      >
        <section id="main-section">
          <div id="weather-text" className="font-bold text-6xl my-3">
            <FontAwesomeIcon icon={faSun} />
            {data.weather[0].main}
          </div>
          <div id="weather-description-text" className="font-semibold text-3xl my-3">
            {data.weather[0].description}
          </div>
          <div id="temp-text">Temperature {data.main.temp}</div>
          <div id="temp-feels-text">Feels Like {data.main.feels_like}</div>
        </section>
      </article>
    );
  } else {
    return <span>Error no data !</span>;
  }
}
