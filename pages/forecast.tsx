import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useLocation } from "../hooks/useLocation";

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  let cachedData;

  // Cached data values
  if (typeof window !== "undefined") {
    cachedData = JSON.parse(localStorage.getItem("weather-data") || "[]");
  }

  // In case if geolocation is not awailable in the browser
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

  return (
    <div className="page bg-gradient-to-b from-[#D7F9D0] to-[#EEF9ED]">
      <Head>
        <title>{"Today's forecast"}</title>
      </Head>
      <div>
        {isLocationLoading && "Loading location"}
        {isWeatherLoading && "Loading weather"}
      </div>
      <header className="header grid grid-cols-2">
        <p className="justify-self-left p-2 text-black/[0.65] text-[21px] font-semibold">
          {"Today's weather"}
        </p>
        <p className="justify-self-end p-2">Colombo</p>
      </header>
    </div>
  );
}
