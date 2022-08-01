import { BoldMediumText } from "../Text/bold-medium-text";
import { BoldText } from "../Text/bold-text";
import { Quantity } from "../Text/quantity";

interface WeatherLabelProps {
  title: string;
  Icon: JSX.Element;
  value: string | number | undefined;
  alt: string;
}

export function WeatherLabel({ title, Icon, value, alt }: WeatherLabelProps) {
  return (
    <article className="weather-label grid grid-cols-1 bg-[#63C2C8] rounded-[13px] p-4">
      <section className="title">
        <BoldText isCenter={true}>{title}</BoldText>
      </section>
      <section className="content grid grid-cols-ratio-1-2 justify-items-center items-center">
        {Icon}
        <BoldMediumText>
          <Quantity type="precent">{value}</Quantity>
        </BoldMediumText>
      </section>
    </article>
  );
}
