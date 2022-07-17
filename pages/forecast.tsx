import Head from "next/head";
import { useWeather } from "../hooks/useWeather";
import { useTheme } from "../hooks/useTheme";
import { CurrentWeather } from "../components/current-weather";
import { useLocation } from "../hooks/useLocation";
import { Fragment } from "react";

function Main({ children }: any) {
  return (
    <Fragment>
      <Head>
        <title>Weather forecast</title>
      </Head>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}

export default function ForecastPage() {
  // Used to detect live location
  const { location, isLocationLoading, locationError, noLocation } =
    useLocation();
  const { data, isWeatherLoading ,weatherError } = useWeather(location);
  //const theme = useTheme(data?.weather[0].id);
  if (noLocation) {
    console.error("No geolocation in the browser, internal error !");
    return <p>No geolocation functionality awailable in the browser</p>;
  }

  if (isLocationLoading) {
    return (
      <Main>
        <p>Loading location</p>
      </Main>
    );
  } else {
    if (locationError?.code === 1) {
      return (
        <Main>
          <p>Location permission error</p>
        </Main>
      );
    } else if (locationError?.code === 2) {
      return (
        <Main>
          <p>Location unvailable</p>
        </Main>
      );
    } else if (locationError?.code === 3) {
      return (
        <Main>
          <p>Location timeout error</p>
        </Main>
      );
    } else {
      if(isWeatherLoading) {
        return (
          <Main>
            <p>Loading weather</p>
          </Main>
        )
      } else if (weatherError) {
        return (
          <Main>
            <p>Weather data error</p>
          </Main>
        );
      } else {
        if(Object.keys(data).length <= 2) {
          return (
            <Main>
              <p>Error with the API</p>
            </Main>
          )
        }
      }
    }
  }

  return (
    <Main>
      <div
        id="forecast-page"
        style={
          {
            //backgroundImage: `linear-gradient(${theme.bg.from}, ${theme.bg.to})`,
          }
        }
      >
        <CurrentWeather
          main={data?.weather[0].main}
          description={data?.weather[0].description}
          temperature={data?.main.temp}
        />
      </div>
    </Main>
  );
}
