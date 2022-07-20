import Image from "next/image";
import windIcon from "../public/wind.svg";
import { DashboardLeftProps } from "../interfaces/props";

export function DashboardLeft({
  theme,
  weatherMain,
  weatherDescription,
}: DashboardLeftProps) {
  return (
    <section
      className={`left bg-cover bg-no-repeat rounded-md grid grid-cols-1 gap-3 content-center justify-items-center font-open-sans`}
      style={{ backgroundImage: theme.left.bg.day }}
    >
      <div className="weather-icon">
        <Image alt="weather-icon" src={windIcon} />
      </div>
      <p
        className="main text-4xl font-bold"
        style={{ color: theme.left.fg.day }}
      >
        {weatherMain}
      </p>
      <p
        className="description font-bold text-lg"
        style={{ color: theme.left.fg.day }}
      >
        {weatherDescription}
      </p>
    </section>
  );
}
