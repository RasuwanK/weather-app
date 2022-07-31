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

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  // To obtain current weather status
  const { data, isWeatherLoading, weatherError } = useWeather(location);
  const wind = data && getDirection(data?.wind.deg); //getDirection(data?.wind.deg || cachedData?.wind.deg);

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
          <ScreenMessage message="Gathering location data" image={magnifier} />
        </Fragment>
      ) : locationError ? (
          locationError.code === 1 ? <ScreenMessage
            message="Please give your order to access location"
            image={magnifier}
          />: locationError.code === 2 ? <ScreenMessage message="We can't find where you are" image={magnifier} /> : locationError.code === 3 ? <ScreenMessage message="Hey we waited so long but we can't find where you are" image={magnifier} /> : <></>
      ) : isWeatherLoading ? (
        <Fragment>
          <ScreenMessage message="Gathering weather data" image={radio} />
        </Fragment>
      ) : weatherError ? (
        <Fragment>
          <ScreenMessage
            message={`${weatherError}`}
            image={radio}
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
                  id={data?.weather[0].id}
                  dimensions={{ width: 150, height: 150 }}
                />
              }
              main={data?.weather[0].main}
              description={data?.weather[0].description}
            />
            {/* The whole */}
            <div className="flex flex-col bottom-content mt-[200px] items-center">
              <div className="weather-data-cards flex flex-col lg:w-[80%] w-[90%]">
                <div className="two-cell-row grid md:grid-cols-2 grid-cols-1 my-4 gap-3">
                  <WeatherArticle
                    title="Temperature"
                    Icon={<ThermoIcon dimensions={{ width: 90, height: 90 }} />}
                    mainData={`${data?.main.temp}`}
                    unit="temp"
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
                    belowData={[
                      {
                        key: "Gust",
                        value: data?.main.temp_min,
                      },
                    ]}
                  />
                  <WeatherArticle
                    title="Pressure"
                    Icon={<BarrowIcon dimensions={{ width: 90, height: 90 }} />}
                    mainData={data?.main.pressure}
                    unit="pressure"
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
