import { CurrentWeatherProps } from "../interfaces/props";

export function CurrentWeather() {
  const container = localStorage.getItem("weather-data");
  let data = null;
  if (container !== "pending") {
    data = JSON.parse(container!);
  }

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
          {data?.weather[0].main}
        </div>
        <div id="description" className="text-3xl">
          {data?.weather[0].description}
        </div>
        <div id="temperatue" className="text-2xl">
          {data?.main.temp}
        </div>
      </section>
    </article>
  );
}
