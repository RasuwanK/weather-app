import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useLocation } from "../hooks/useLocation";
import { Fragment } from "react";
import { getDirection } from "../lib/directions";
import { WeatherArticle } from "../components/WeatherArticle/weather-article";
import { WeatherLabel } from "../components/WeatherLabel/weather-label";
import { ColumnHell } from "../components/Grid/column-hell";
import { HeadingBar } from "../components/HeadingBar/heading-bar";
import { MainDetails } from "../components/MainDetails/main-details";
import { Quantity } from "../components/Text/quantity";
import { WeatherIcon } from "../components/SVGs/weather-icon";
import { ThermoIcon } from "../components/SVGs/thermo-icon";
import { HumidityIcon } from "../components/SVGs/humidity-icon";
import { CloudIcon } from "../components/SVGs/cloud-icon";
import { WindIcon } from "../components/SVGs/wind-icon";
import { BarrowIcon } from "../components/SVGs/barrow-icon";
import { ScreenMessage } from "../components/ScreenMessage/screen-message";
import magnifier from "../public/Magnify-1.4s-200px.gif";
import radio from "../public/Radio-1s-200px.gif";
import { LongWeatherArticle } from "../components/WeatherArticle/long-weather-article";
import keyIcon from "../public/encryption.gif";
import { Lock } from "../components/SVGs/lock";
import { NoLocation } from "../components/SVGs/no-location";
import { Clock } from "../components/SVGs/clock";
import { LoadingMap } from "../components/SVGs/loading-map";
import { LoadingCloud } from "../components/SVGs/loading-cloud";
import { Error404 } from "../components/SVGs/error-404";

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const wind = data
    ? getDirection(data?.wind.deg)
    : { dir: " ", from: "....", to: "....." }; //getDirection(data?.wind.deg || cachedData?.wind.deg);

  return (
    <Fragment>
      <Head>
        <title>{"Today's forecast"}</title>
      </Head>
      {noLocation ? (
        <ColumnHell className="bg-gradient-to-b from-[#D7F9D0] to-[#EEF9ED]">
          <p className="text-center">
            Unsupported browser - This browser does not have the geolocation
            facility
          </p>
        </ColumnHell>
      ) : isLocationLoading ? (
        <Fragment>
          <ScreenMessage
            message="Gathering location data"
            image={<LoadingMap dimensions={{ width: 80, height: 80 }} />}
          />
        </Fragment>
      ) : locationError ? (
        locationError.code === 1 ? (
          <ScreenMessage
            message="Please give your order to access location"
            image={<Lock dimensions={{ width: 80, height: 80 }} />}
          />
        ) : locationError.code === 2 ? (
          <ScreenMessage
            message="We can't find where you are, Seems like no internet"
            image={<NoLocation dimensions={{ width: 80, height: 80 }} />}
          />
        ) : locationError.code === 3 ? (
          <ScreenMessage
            message="Hey we waited so long but we can't find where you are"
            image={<Clock dimensions={{ width: 80, height: 80 }} />}
          />
        ) : (
          <></>
        )
      ) : isWeatherLoading ? (
        <Fragment>
          <ScreenMessage
            message="Gathering weather data"
            image={<LoadingCloud dimensions={{ width: 80, height: 80 }} />}
          />
        </Fragment>
      ) : weatherError ? (
        <Fragment>
          <ScreenMessage
            message={`${weatherError}`}
            image={<Error404 dimensions={{ width: 80, height: 80 }} />}
          />
        </Fragment>
      ) : (
        <Fragment>
          <div className="flex flex-col my-10">
            {/* Top heading */}
            <HeadingBar location={data?.name} />
            {/* Main weather details container  */}
            <MainDetails
              Icon={
                <WeatherIcon
                  id={data?.weather[0].icon}
                  dimensions={{ width: 150, height: 150 }}
                />
              }
              main={data?.weather[0].main}
              description={data?.weather[0].description}
            />
            {/* The whole */}
            <div className="flex flex-col bottom-content mt-[200px] items-center">
              <div className="weather-data-cards flex flex-col lg:w-[80%] w-[90%]">
                {"rain" in data! ? (
                  <LongWeatherArticle
                    title="Rainfall"
                    color="#9AC3A8"
                    fallback="No rainfall"
                    unit="rainfall"
                    Icon={
                      <WeatherIcon
                        id="10d"
                        dimensions={{ width: 90, height: 90 }}
                      />
                    }
                    middleData={{
                      key: "Last 1h",
                      value: data?.rain["1h"]?.toString(),
                    }}
                    rightData={{
                      key: "Last 3h",
                      value: data?.rain["3h"]?.toString(),
                    }}
                  />
                ) : (
                  <Fragment></Fragment>
                )}
                {"snow" in data! ? (
                  <LongWeatherArticle
                    title="Rainfall"
                    color="#CBCCCC"
                    fallback="No rainfall"
                    unit="rainfall"
                    Icon={
                      <WeatherIcon
                        id="10d"
                        dimensions={{ width: 90, height: 90 }}
                      />
                    }
                    middleData={{
                      key: "Last 1h",
                      value: data?.snow["1h"]?.toString(),
                    }}
                    rightData={{
                      key: "Last 3h",
                      value: data?.snow["3h"]?.toString(),
                    }}
                  />
                ) : (
                  <Fragment></Fragment>
                )}
                <div className="two-cell-row grid md:grid-cols-2 grid-cols-1 my-4 gap-3">
                  <WeatherArticle
                    title="Temperature"
                    Icon={<ThermoIcon dimensions={{ width: 90, height: 90 }} />}
                    mainData={`${data?.main.temp}`}
                    unit="temp"
                    metaData={
                      data?.main.temp_min !== data?.main.temp_max
                        ? {
                            "1": {
                              key: "Max",
                              value: data?.main.temp_max.toString(),
                              unit: "temp",
                            },
                            "2": {
                              key: "Min",
                              value: data?.main.temp_min.toString(),
                              unit: "temp",
                            },
                            "3": {
                              key: "Feels Like",
                              value: data?.main.feels_like.toString(),
                              unit: "temp",
                            },
                          }
                        : {
                            "1": {
                              key: "Feels Like",
                              value: data?.main.feels_like.toString(),
                              unit: "temp",
                            },
                          }
                    }
                    color="#D8DBB1"
                  />
                  <div className="two-row-cell grid grid-cols-1 grid-row-2 gap-3">
                    <WeatherLabel
                      title="Humidity"
                      Icon={
                        <HumidityIcon dimensions={{ width: 90, height: 90 }} />
                      }
                      value={data?.main.humidity}
                      alt="Icon of water droplets"
                    />
                    <WeatherLabel
                      title="Cloudness"
                      Icon={
                        <CloudIcon dimensions={{ width: 90, height: 90 }} />
                      }
                      value={data?.clouds.all}
                      alt="Icon of water droplets"
                    />
                  </div>
                </div>
                <div className="two-cell-row grid md:grid-cols-2 gap-3 my-4">
                  <WeatherArticle
                    title="Wind"
                    Icon={<WindIcon dimensions={{ width: 90, height: 90 }} />}
                    mainData={data?.wind.speed}
                    unit="speed"
                    sideDescription={
                      <Fragment>
                        Wind blows <Quantity type="angle">{wind.dir}</Quantity>{" "}
                        from {wind.from} towards {wind.to}
                      </Fragment>
                    }
                    color="#C7C0E3"
                    metaData={{
                      "1": {
                        key: "Gust",
                        value: data?.wind.gust.toString(),
                        unit: "speed",
                      },
                    }}
                  />
                  <WeatherArticle
                    title="Pressure"
                    Icon={<BarrowIcon dimensions={{ width: 90, height: 90 }} />}
                    mainData={data?.main.pressure}
                    unit="pressure"
                    color="#E2B2AF"
                    metaData={{
                      "1": {
                        key: "Ground",
                        value: data?.main.grnd_level.toString(),
                        unit: "pressure",
                      },
                      "2": {
                        key: "Sea",
                        value: data?.main.sea_level.toString(),
                        unit: "pressure",
                      },
                    }}
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
