import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useLocation } from "../hooks/useLocation";
import Image from "next/image";
import Images from "../lib/weather-icons";
import humidIcon from "../public/weather-icons/water-drop.svg";
import rainIcon from "../public/weather-icons/rain.svg";
import thermoIcon from "../public/weather-icons/thermometer.svg";
import meterIcon from '../public/weather-icons/meter.svg';
import { WeatherData } from "../interfaces/weather-data";
import { Fragment, useEffect, useState } from "react";

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const [cachedData, setCachedData] = useState<WeatherData>();

  useEffect(() => {
    setCachedData(JSON.parse(localStorage.getItem("weather-data") || "[]"));
  }, []);

  // In case if geolocation is not awailable in the browser
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{"Today's forecast"}</title>
      </Head>
      <div className="site-content bg-gradient-to-b from-[#D7F9D0] to-[#EEF9ED]">
        <header className="header grid grid-cols-2">
          <p className="justify-self-start p-2 text-black/[0.65] text-[21px] font-semibold">
            {"Today's weather"}
          </p>
          <p className="justify-self-end p-2">Colombo</p>
        </header>
        <article className="main-details w-[400px] mt-11 grid grid-cols-2 justify-items-center">
          <section className="icon">
            <Image
              alt="Weather Icon"
              width="120"
              height="120"
              src={Images[data?.weather[0].icon || "01d"]}
            />
          </section>
          <section className="content">
            <h1 className="font-bold text-[36px]">
              {data?.weather[0].main || cachedData?.weather[0].main}
            </h1>
            <p className="font-semibold text-[16px]">
              {data?.weather[0].description ||
                cachedData?.weather[0].description}
            </p>
          </section>
        </article>
        <div className="weather-data-cards mt-[200px] grid justify-items-center">
          <div className="flex flex-col w-[90%] lg:w-[80%]">
            {Object.hasOwn(data || cachedData || {}, "rain") && (
              <article className="rain-data-card grid grid-cols-3 gap-3 items-center justify-center p-4 bg-[#9AC3A8] rounded-[13px] h-[200px]">
                <section className="grid justify-items-center p-4">
                  <p className="text-[36px] font-bold">Rain</p>
                  <Image
                    src={rainIcon}
                    alt="Cloud with raining"
                    width="100"
                    height="100"
                  />
                </section>
                <section className="grid justify-items-center p-4 bg-white/[0.26] rounded-[13px] h-[90%]">
                  <p className="text-[16px] font-bold">Last 1h</p>
                  <p className="text-[29px]">
                    {data?.rain["1h"] || cachedData?.rain["1h"]}
                  </p>
                </section>
                <section className="grid justify-items-center p-4 bg-white/[0.26] rounded-[13px] h-[90%]">
                  <p className="text-[16px] font-bold">Last 3h</p>
                  <p className="text-[29px]">
                    {data?.rain["3h"] ||
                      cachedData?.rain["3h"] ||
                      "No rainfall"}
                  </p>
                </section>
              </article>
            )}
            <div className="split-container grid grid-cols-2 h-[380px] gap-4">
              <article className="temperature-card grid grid-cols-1 items-center bg-[#D8DBB1] rounded-[13px] p-3">
                <section className="grid grid-cols-1 justify-items-center">
                  <p className="text-[20px] font-bold">Temperature</p>
                </section>
                <section className="grid grid-cols-ratio-1-2 justify-items-center">
                  <aside>
                    <Image
                      src={thermoIcon}
                      alt="Image of an thermometer"
                      height="150"
                      width="100"
                    />
                  </aside>
                  <section className="grid justify-items-center">
                    <p className="text-[45px] font-bold">
                      {data?.main.temp || cachedData?.main.temp} C<sup>0</sup>
                    </p>
                    <section className="grid grid-cols-2 gap-3">
                      <p>Max</p>
                      <p>{data?.main.temp_max || cachedData?.main.temp_max}</p>
                    </section>
                    <section className="grid grid-cols-2 gap-3">
                      <p>Min</p>
                      <p>{data?.main.temp_min || cachedData?.main.temp_min}</p>
                    </section>
                  </section>
                </section>
              </article>
              <div className="grid grid-cols-1 grid-rows-2 gap-3">
                <article className="humidity-card grid grid-cols-1 justify-items-stretch p-4 rounded-[13px] bg-[#A6D6D9]">
                  <p className="text-[20px] font-bold justify-self-center text-center">
                    Humidity
                  </p>
                  <article className="grid grid-cols-ratio-1-2 items-center">
                    <Image
                      alt="An image of water droplets"
                      width="90"
                      height="100"
                      src={humidIcon}
                    />
                    <p className="text-center text-[30px] justify-self-center">
                      {data?.main.humidity} %
                    </p>
                  </article>
                </article>
                <article className="cloudness-card grid grid-cols-1 justify-items-stretch p-4 rounded-[13px] bg-[#A6D6D9]">
                  <p className="text-[20px] font-bold justify-self-center text-center">
                    Cloudness
                  </p>
                  <article className="grid grid-cols-ratio-1-2 items-center">
                    <Image
                      alt="An image of water droplets"
                      width="90"
                      height="100"
                      src={Images["04d"]}
                    />
                    <p className="text-center text-[30px] justify-self-center">
                      {data?.clouds.all} %
                    </p>
                  </article>
                </article>
              </div>
            </div>
            <div className="split-container mt-[50px] grid grid-cols-2 grid-row-1 h-[380px] gap-4">
              <article className="temperature-card grid grid-cols-1 items-center bg-[#C7C0E3] rounded-[13px] p-3">
                <section className="grid grid-cols-1 justify-items-center">
                  <p className="text-[20px] font-bold">Wind</p>
                </section>
                <section className="grid grid-cols-ratio-1-2 justify-items-center">
                  <aside>
                    <Image
                      src={Images['50d']}
                      alt="Image of an thermometer"
                      height="150"
                      width="100"
                    />
                  </aside>
                  <section className="grid justify-items-center">
                    <p className="text-[45px] font-bold">
                      {data?.wind.speed || cachedData?.wind.speed} ms<sup>-1</sup>
                    </p>
                    <section className="grid grid-cols-2 gap-3">
                      <p>Direction</p>
                      <p>{data?.wind.deg || cachedData?.wind.deg}</p>
                    </section>
                    <section className="grid grid-cols-2 gap-3">
                      <p>Min</p>
                      <p>{data?.main.temp_min || cachedData?.main.temp_min}</p>
                    </section>
                  </section>
                </section>
              </article>
              <article className="temperature-card grid grid-cols-1 items-center bg-[#E2B2AF] rounded-[13px] p-3">
                <section className="grid grid-cols-1 justify-items-center">
                  <p className="text-[20px] font-bold">Wind</p>
                </section>
                <section className="grid grid-cols-ratio-1-2 justify-items-center">
                  <aside>
                    <Image
                      src={meterIcon}
                      alt="Image of an thermometer"
                      height="150"
                      width="100"
                    />
                  </aside>
                  <section className="grid justify-items-center">
                    <p className="text-[45px] font-bold">
                      {data?.main.pressure || cachedData?.main.pressure} hPa
                    </p>
                    <section className="grid grid-cols-2 gap-3">
                      <p>Sea</p>
                      <p>{data?.main.sea_level || cachedData?.main.sea_level}</p>
                    </section>
                    <section className="grid grid-cols-2 gap-3">
                      <p>Ground</p>
                      <p>{data?.main.grnd_level || cachedData?.main.grnd_level}</p>
                    </section>
                  </section>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
