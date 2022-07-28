import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useLocation } from "../hooks/useLocation";
import Images from "../lib/weather-icons";
import humidIcon from "../public/weather-icons/water-drop.svg";
import rainIcon from "../public/weather-icons/rain.svg";
import thermoIcon from "../public/weather-icons/thermometer.svg";
import meterIcon from "../public/weather-icons/meter.svg";
import { WeatherData } from "../interfaces/weather-data";
import { Fragment, useEffect, useState } from "react";
import { getDirection } from "../lib/directions";
import { WeatherArticle } from "../components/WeatherArticle/weather-article";
import { WeatherLabel } from "../components/WeatherLabel/weather-label";
import { ColumnHell } from "../components/Grid/column-hell";
import { HeadingBar } from "../components/HeadingBar/heading-bar";
import { MainDetails } from "../components/MainDetails/main-details";

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
      <ColumnHell className="bg-gradient-to-b from-[#D7F9D0] to-[#EEF9ED]">
        <HeadingBar location={data?.name || cachedData?.name} />
        <MainDetails
          icon={
            Images[
              data?.weather[0].icon || cachedData?.weather[0].icon || "01d"
            ]
          }
          main={data?.weather[0].main || data?.weather[0].main}
          description={
            data?.weather[0].description || cachedData?.weather[0].description
          }
        />
        <ColumnHell className="bottom-content mt-[200px] justify-items-center">
          <ColumnHell className="weather-data-cards lg:w-[80%] w-[90%] gap-4">
            <div className="two-cell-row grid md:grid-cols-2 grid-cols-1 items-stretch gap-3">
              <WeatherArticle
                title="Temperature"
                image={thermoIcon}
                mainData={`${data?.main.temp || cachedData?.main.temp}`}
                unit="temp"
                alt="Image of a thermometer"
                belowData={[
                  {
                    key: "Max",
                    value: data?.main.temp_max || cachedData?.main.temp_max,
                  },
                  {
                    key: "Min",
                    value: data?.main.temp_min || cachedData?.main.temp_min,
                  },
                ]}
                color="#D8DBB1"
              />
              <div className="two-row-cell grid grid-cols-1 grid-row-2 items-stretch gap-3">
                <WeatherLabel
                  title="Humidity"
                  icon={humidIcon}
                  value={data?.main.humidity || cachedData?.main.humidity}
                  alt="Icon of water droplets"
                />
                <WeatherLabel
                  title="Cloudness"
                  icon={Images["04d"]}
                  value={data?.clouds.all || cachedData?.clouds.all}
                  alt="Icon of water droplets"
                />
              </div>
            </div>
            <div className="two-cell-row grid md:grid-cols-2 items-stretch gap-3">
              <WeatherArticle
                title="Wind"
                image={Images["50d"]}
                mainData={data?.wind.speed}
                unit="speed"
                alt="An image of a tornado"
                sideDescription={`Wind blows from ${getDirection(
                  data?.wind.deg || cachedData?.wind.deg
                )}`}
                color="#C7C0E3"
                belowData={[
                  {
                    key: "Gust",
                    value: data?.main.temp_min || cachedData?.main.temp_min,
                  },
                ]}
              />
              <WeatherArticle
                title="Pressure"
                image={meterIcon}
                mainData={data?.main.pressure}
                unit="pressure"
                alt="An image of a barrowmeter"
                color="#E2B2AF"
                belowData={[
                  {
                    key: "Ground",
                    value: data?.main.grnd_level || cachedData?.main.grnd_level,
                  },
                  {
                    key: "Sea",
                    value: data?.main.sea_level || cachedData?.main.sea_level,
                  },
                ]}
              />
            </div>
          </ColumnHell>
        </ColumnHell>
      </ColumnHell>
    </Fragment>
  );
}
