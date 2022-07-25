import { DashboardLeft } from "./dashboard-left";
import { DashboardRight } from "./dashboard-right";
import { DashboardProps } from "../interfaces/props";

export function WeatherDashboard({ theme, data, cachedData }: DashboardProps) {
  return (
    <article className="weather-dashboard grid grid-cols-1">
      <section className="dashboard-content grid grid-cols-1 xl:grid-cols-ratio-1-2 mx:gap-2">
        <DashboardLeft
          theme={theme}
          weatherMain={data?.weather[0].main || cachedData?.weather[0].main}
          weatherDescription={
            data?.weather[0].description || cachedData?.weather[0].description
          }
        />
        <DashboardRight theme={theme} data={data || cachedData} />
      </section>
    </article>
  );
}
