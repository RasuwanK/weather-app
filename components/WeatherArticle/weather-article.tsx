import { BoldText } from "../Text/bold-text";
import { BoldMediumText } from "../Text/bold-medium-text";
import { Quantity } from "../Text/quantity";
import { ReactNode } from "react";

interface Table {
  key: string | undefined;
  value: string | undefined;
  unit?: string | undefined;
}

interface MetaData {
  "1"?: Table;
  "2"?: Table;
  "3"?: Table;
}

interface WeatherArticleProps {
  title: String;
  Icon: JSX.Element;
  mainData: number | string | undefined;
  metaData?: MetaData;
  color: string;
  unit: string;
  sideDescription?: ReactNode;
}

export function WeatherArticle({
  title,
  Icon,
  mainData,
  metaData,
  unit,
  sideDescription,
  color,
}: WeatherArticleProps) {
  return (
    <article
      className={`weather-article grid grid-cols-1 grid-rows-ratio-1-5 h-[400px] rounded-[13px] p-3`}
      style={{ backgroundColor: `${color}` }}
    >
      <section className="top">
        <section className="title">
          <BoldText isCenter>{title}</BoldText>
        </section>
        <section className="side-description grid p-3 mt-3 grid-cols-1 justify-items-center">
          <p className="text-center sx:text-xl">{sideDescription}</p>
        </section>
      </section>
      <section className="bottom grid items-center justify-items-center grid-cols-1 sx:grid-cols-ratio-1-2">
        <section className="left">{Icon}</section>
        <section className="right grid grid-cols-1">
          <section className="main-data">
            <BoldMediumText isCenter={true}>
              <Quantity type={unit}>{mainData}</Quantity>
            </BoldMediumText>
          </section>
          <section className="meta-data grid grid-cols-2 grid-rows-2 gap-2 justify-items-center">
            {/* 1st row */}
            <div className="lg:text-2xl">
              {typeof metaData !== "undefined" && metaData["1"]?.key}
            </div>
            <div>
              {typeof metaData !== "undefined" && (
                <p className="lg:text-2xl">
                  <Quantity type={metaData["1"]?.unit}>
                    {metaData["1"]?.value}
                  </Quantity>
                </p>
              )}
            </div>
            {/* 2st row */}
            <div className="lg:text-2xl">
              {typeof metaData !== "undefined" && metaData["2"]?.key}
            </div>
            <div>
              {typeof metaData !== "undefined" && (
                <p className="lg:text-2xl">
                  <Quantity type={metaData["2"]?.unit}>
                    {metaData["2"]?.value}
                  </Quantity>
                </p>
              )}
            </div>
            {/* 3st row */}
            <div className="lg:text-2xl">
              {typeof metaData !== "undefined" && metaData["3"]?.key}
            </div>
            <div>
              {typeof metaData !== "undefined" && (
                <p className="lg:text-2xl">
                  <Quantity type={metaData["3"]?.unit}>
                    {metaData["3"]?.value}
                  </Quantity>
                </p>
              )}
            </div>
          </section>
        </section>
      </section>
    </article>
  );
}
