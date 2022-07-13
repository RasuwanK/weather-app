import { MainForecastProps } from "../interfaces/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export function MainForecast({ data }: MainForecastProps) {
  const color = "#ecf0e98a";
  if (data) {
    return (
      <article
        id="main-forecast"
        className={`grid grid-cols-1 grid-rows-1 p-5 bg-[${color}] drop-shadow-lg w-full`}
      >
        <section id="main-section">
          <div id="weather-text" className="font-bold text-6xl my-3 flex">
            <div id="weather-icon-container" className="">
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div id="weather-condition" className="">
              {data.weather[0].main}
            </div>
          </div>
          <div
            id="weather-description-text"
            className="font-semibold text-3xl my-3"
          >
            {data.weather[0].description}
          </div>
          <div id="temp-text" className="">
            Temperature {data.main.temp}
          </div>
          <div id="temp-feels-text" className="">
            Feels Like {data.main.feels_like}
          </div>
        </section>
      </article>
    );
  } else {
    return <span>Error no data !</span>;
  }
}
