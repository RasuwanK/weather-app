import { DashboardLeft } from "./dashboard-left";
import { DashboardRight } from "./dashboard-right";
import { DashboardProps } from "../interfaces/props";
import { DashboardTop } from "./dashboard-top";

export function WeatherDashboard({ theme, data, cachedData }: DashboardProps) {
  return (
    <article className="weather-dashboard m-1 grid gap-2 grid-cols-1">
      <section
        className="dashboard-title rounded-md p-4 font-bold text-2xl text-center w-full"
        style={{ backgroundColor: theme.right.bg.day, color:theme.right.fg.day }}
      >
        {"Today's"} weather
      </section>
      <section className="dashboard-content grid grid-cols-dashboard-lg">
        <DashboardLeft
          theme={theme}
          weatherMain={data?.weather[0].main || cachedData?.weather[0].main}
          weatherDescription={
            data?.weather[0].description || cachedData?.weather[0].description
          }
        />
        <DashboardRight theme={theme} />
      </section>
    </article>
  );
}
