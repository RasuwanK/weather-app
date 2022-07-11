import { MainForecastProps } from "../interfaces/props";

export function MainForecast({ data }: MainForecastProps) {
  if (data) {
    return (
      <article id="main-forecast" className="">
        <section id="main-section">
          <div id="weather-text">{data.weather[0].main}</div>
          <div id="weather-description-text">{data.weather[0].description}</div>
          <div id="temp-text">Temperature {data.main.temp}</div>
          <div id="temp-feels-text">Feels Like {data.main.feels_like}</div>
        </section>
      </article>
    );
  } else {
    return <span>Error no data !</span>;
  }
}
