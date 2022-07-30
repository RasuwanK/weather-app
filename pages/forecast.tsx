import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useLocation } from "../hooks/useLocation";
import Images from "../lib/weather-icons";
import humidIcon from "../public/weather-icons/water-drop.svg";
import rainIcon from "../public/weather-icons/rain.svg";
import thermoIcon from "../public/weather-icons/thermometer.svg";
import meterIcon from "../public/weather-icons/meter.svg";
import loadingIcon from "../public/weather-icons/Radio-1s-200px.gif";
import { Fragment } from "react";
import { getDirection } from "../lib/directions";
import { WeatherArticle } from "../components/WeatherArticle/weather-article";
import { WeatherLabel } from "../components/WeatherLabel/weather-label";
import { ColumnHell } from "../components/Grid/column-hell";
import { HeadingBar } from "../components/HeadingBar/heading-bar";
import { MainDetails } from "../components/MainDetails/main-details";
import { Quantity } from "../components/Text/quantity";
import Image from "next/image";
import { BoldText } from "../components/Text/bold-text";
import { LoadingWeather } from "../components/Loading/loading-weather";
import { LoadingLocation } from "../components/Loading/loading-location";

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const wind = data && getDirection(data?.wind.deg); //getDirection(data?.wind.deg || cachedData?.wind.deg);
  const isError = weatherError || locationError;

  // In case if geolocation is not awailable in the browser
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return (
      <Fragment>
        <Head>
          <title>Forecast - unsupported browser</title>
        </Head>
        <ColumnHell className="bg-gradient-to-b from-[#D7F9D0] to-[#EEF9ED]">
          <p className="text-center">
            Unsupported browser - This browser does not have the geolocation
            facility
          </p>
        </ColumnHell>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{"Today's forecast"}</title>
      </Head>
      {isLocationLoading ? (
        <Fragment>
          <LoadingLocation />
        </Fragment>
      ) : isWeatherLoading ? (
        <Fragment>
          <LoadingWeather />
        </Fragment>
      ) : isError ? (
        <Fragment>
          <div className="flex flex-col h-[1700px]">
            {locationError && <p>Error while loading location</p>}
            {weatherError && <p>Error while loading weather data</p>}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="flex flex-col my-10">
            {/* Top heading */}
            <HeadingBar location={data?.name} />
            {/* Main weather details container  */}
            <MainDetails
              icon={Images[data?.weather[0].icon]}
              main={data?.weather[0].main}
              description={data?.weather[0].description}
            />
            {/* The whole */}
            <div className="flex flex-col bottom-content mt-[200px] items-center">
              <div className="weather-data-cards flex flex-col lg:w-[80%] w-[90%]">
                <div className="two-cell-row grid md:grid-cols-2 grid-cols-1 my-4 items-stretch gap-3">
                  <WeatherArticle
                    title="Temperature"
                    image={thermoIcon}
                    mainData={`${data?.main.temp}`}
                    unit="temp"
                    alt="Image of a thermometer"
                    belowData={[
                      {
                        key: "Max",
                        value: data?.main.temp_max,
                      },
                      {
                        key: "Min",
                        value: data?.main.temp_min,
                      },
                    ]}
                    color="#D8DBB1"
                  />
                  <div className="two-row-cell grid grid-cols-1 grid-row-2 items-stretch gap-3">
                    <WeatherLabel
                      title="Humidity"
                      icon={humidIcon}
                      value={data?.main.humidity}
                      alt="Icon of water droplets"
                    />
                    <WeatherLabel
                      title="Cloudness"
                      icon={Images["04d"]}
                      value={data?.clouds.all}
                      alt="Icon of water droplets"
                    />
                  </div>
                </div>
                <div className="two-cell-row grid md:grid-cols-2 items-stretch gap-3 my-4">
                  <WeatherArticle
                    title="Wind"
                    image={Images["50d"]}
                    mainData={data?.wind.speed}
                    unit="speed"
                    alt="An image of a tornado"
                    sideDescription={
                      <Fragment>
                        Wind blows <Quantity type="angle">{wind.dir}</Quantity>{" "}
                        from {wind.from} towards {wind.to}
                      </Fragment>
                    }
                    color="#C7C0E3"
                    belowData={[
                      {
                        key: "Gust",
                        value: data?.main.temp_min,
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
                        value: data?.main.grnd_level,
                      },
                      {
                        key: "Sea",
                        value: data?.main.sea_level,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
