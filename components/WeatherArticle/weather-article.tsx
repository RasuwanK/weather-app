import { BoldText } from "../Text/bold-text";
import { BoldMediumText } from "../Text/bold-medium-text";
import { Quantity } from "../Text/quantity";
import { ReactNode } from "react";
import { WeatherIcon, Icon } from "../SVGs/weather-icon";

interface WeatherArticleProps {
  title: String;
  Icon: JSX.Element;
  mainData: number | string | undefined;
  belowData: { key: string | number; value: string | number | undefined }[];
  color: string;
  unit: string;
  sideDescription?: ReactNode;
}

export function WeatherArticle({
  title,
  Icon,
  mainData,
  belowData,
  unit,
  sideDescription,
  color,
}: WeatherArticleProps) {
  return (
    <article
      className={`weather-article drop-shadow-md grid grid-cols-1 grid-rows-ratio-1-5 h-[400px] rounded-[13px] p-3`}
      style={{ backgroundColor: `${color}` }}
    >
      <section className="title">
        <BoldText isCenter>{title}</BoldText>
        <section className="side-description grid p-3 mt-3 grid-cols-1 justify-items-center">
          <p className="text-center">{sideDescription}</p>
        </section>
      </section>
      <section className="grid items-center justify-items-center grid-cols-1 sx:grid-cols-ratio-1-2">
        <section className="left">{Icon}</section>
        <section className="right grid grid-cols-1 justify-items-center">
          <section className="main-data">
            <BoldMediumText isCenter={true}>
              <Quantity type={unit}>{mainData}</Quantity>
            </BoldMediumText>
          </section>
          <article className="tabled-data gap-4">
            {belowData.map(({ key, value }, index) => {
              return (
                <section key={index + 1} className="grid grid-cols-2 gap-2">
                  <div className="text-center text-[20px]">{key}</div>
                  <div className="text-center text-[20px]">{value}</div>
                </section>
              );
            })}
          </article>
        </section>
      </section>
    </article>
  );
}
