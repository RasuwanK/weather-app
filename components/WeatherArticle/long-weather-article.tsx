import { Fragment } from "react";
import { BoldText } from "../Text/bold-text";
import { Quantity } from "../Text/quantity";

interface LongWeatherArticleProps {
  title: string;
  Icon: JSX.Element;
  middleData: { key: string; value: string | undefined };
  rightData: { key: string; value: string | undefined };
  unit: string;
  fallback: string;
  color: string;
}

export function LongWeatherArticle({
  title,
  Icon,
  middleData,
  color,
  unit,
  fallback,
  rightData,
}: LongWeatherArticleProps) {
  return (
    <article
      className="long-weather-article grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 justify-items-center p-3 rounded-[13px]"
      style={{ backgroundColor: color }}
    >
      <section className="left grid grid-cols-1 col-start-1 col-end-1 sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-2 grid-rows-ratio-1-2 justify-items-center w-[80%] p-2 rounded-[10px]">
        <BoldText>{title}</BoldText>
        <Fragment>{Icon}</Fragment>
      </section>
      <section className="middle grid grid-cols-1 grid-rows-ratio-1-2 justify-items-center w-[80%] bg-white/[0.30] p-2 rounded-[10px]">
        <BoldText>{middleData.key}</BoldText>

        {middleData.value ? (
          <p className="md:text-4xl text-2xl text-center self-center">
            <Quantity type={unit}>{middleData.value}</Quantity>
          </p>
        ) : (
          <p className="text-xl self-center text-center">{fallback}</p>
        )}
      </section>
      <section className="right grid grid-cols-1 grid-rows-ratio-1-2 justify-items-center w-[80%] bg-white/[0.30] p-2 rounded-[10px]">
        <BoldText>{rightData.key}</BoldText>

        {rightData.value ? (
          <p className="text-4xl text-center self-center">
            <Quantity type={unit}>{rightData.value}</Quantity>
          </p>
        ) : (
          <p className="text-xl text-center self-center">{fallback}</p>
        )}
      </section>
    </article>
  );
}
