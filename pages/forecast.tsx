import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../hooks/useTheme";
import { useLocation } from "../hooks/useLocation";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { WeatherData } from "../interfaces/weather-data";
import Image from "next/image";
import thermoIcon from "../public/thermo.svg";
import windIcon from "../public/wind.svg";
import meter from "../public/meter.svg";
import skyIcon from "../public/sky.svg";
import locationIcon from "../public/location.svg";

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);

  // Cached data values
  const [cachedData, setCachedData] = useState<WeatherData>();

  // Theming system based on the current climate
  const theme = useTheme(data?.weather[0].id || cachedData?.weather[0].id);

  // Each time the data changes this cached data is set
  useEffect(() => {
    const cache = localStorage.getItem("weather-data");
    setCachedData(JSON.parse(cache!));
  }, []);

  // In case if geolocation is not awailable in the browser
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{"Today's"} forecast</title>
      </Head>
      <div className="pt-32">
        <article className="weather-dashboard m-1 grid grid-cols-dashboard-lg">
          <section
            className={`left bg-cover bg-no-repeat rounded-md grid grid-cols-1 gap-3 content-center justify-items-center font-open-sans`}
            style={{ backgroundImage: theme.bgLeft.day }}
          >
            <div className="weather-icon">
              <Image alt="weather-icon" src={windIcon} />
            </div>
            <p className="main text-4xl font-bold text-[#736C6C]">
              {data?.weather[0].main || cachedData?.weather[0].main}
            </p>
            <p className="description font-bold text-lg text-[#736C6C]">
              {data?.weather[0].description ||
                cachedData?.weather[0].description}
            </p>
          </section>
          <section className="right grid grid-cols-1 grid-rows-right-row gap-4 font-open-sans">
            <nav
              className="tab-switcher grid grid-cols-1 items-center p-4 mx-2 rounded-md"
              style={{ backgroundColor: theme.bgRight.day }}
            >
              <ul className="tab-list list-none grid grid-cols-5 gap-3 mx-4">
                <li className="tab grid-rows-tab-layout items-center gap-3 p-4 bg-white border-white rounded-lg drop-shadow-sm hover:border-[#1c293b] hover:cursor-pointer border-4">
                  <div className="tab-icon grid justify-items-center">
                    <Image
                      alt="Thermometer"
                      src={thermoIcon}
                      width="50"
                      height="50"
                      layout="fixed"
                      className="justify-self-center"
                    />
                  </div>
                  <div className="tab-name text-sm text-center">
                    Temperature
                  </div>
                </li>
                <li className="tab grid-rows-tab-layout gap-3 p-4 bg-white rounded-lg drop-shadow-sm">
                  <div className="tab-icon grid justify-items-center">
                    <Image
                      alt="clouds with sun"
                      src={windIcon}
                      width="50"
                      height="50"
                      layout="fixed"
                    />
                  </div>
                  <div className="tab-name text-sm text-center">Wind</div>
                </li>
                <li className="tab grid-rows-tab-layout gap-3 p-4 bg-white rounded-lg drop-shadow-sm">
                  <div className="tab-icon grid justify-items-center">
                    <Image
                      alt="pressure icon"
                      src={meter}
                      width="50"
                      height="50"
                      layout="fixed"
                    />
                  </div>
                  <div className="tab-name text-sm text-center">Pressure</div>
                </li>
                <li className="tab grid-rows-tab-layout gap-3 p-4 bg-white rounded-lg drop-shadow-sm">
                  <div className="tab-icon grid justify-items-center">
                    <Image
                      alt="Clouds with sky"
                      src={skyIcon}
                      width="50"
                      height="50"
                      layout="fixed"
                    />
                    <div className="tab-name text-sm text-center">Sky</div>
                  </div>
                </li>
                <li className="tab grid-rows-tab-layout gap-3 p-4 bg-white rounded-lg drop-shadow-sm">
                  <div className="tab-icon grid justify-items-center">
                    <Image
                      src={locationIcon}
                      width="50"
                      height="50"
                      alt="location"
                      layout="fixed"
                    />
                  </div>
                  <div className="tab-name text-sm text-center">Geography</div>
                </li>
              </ul>
            </nav>
            <article
              className="tab-content text-white mx-2 rounded-md p-4"
              style={{ backgroundColor: theme.bgRight.day }}
            >
              <header className="tab-title">
                <h2 className="tab-title-text text-2xl text-center">
                  Temperature
                </h2>
              </header>
            </article>
          </section>
        </article>
      </div>
    </Fragment>
  );
}
