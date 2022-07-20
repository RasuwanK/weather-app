import { DashboardLeft } from "./dashboard-left";
import { DashboardRight } from "./dashboard-right";
import { DashboardProps } from "../interfaces/props";

export function WeatherDashboard({ theme, data, cachedData }:DashboardProps) {
  return (
    <article className="weather-dashboard m-1 grid grid-cols-dashboard-lg">
      <DashboardLeft
        theme={theme}
        weatherMain={data?.weather[0].main || cachedData?.weather[0].main}
        weatherDescription={
          data?.weather[0].description || cachedData?.weather[0].description
        }
      />
      <DashboardRight theme={theme} />
    </article>
  );
}
