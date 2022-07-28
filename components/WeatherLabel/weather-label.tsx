import { BoldMediumText } from "../Text/bold-medium-text";
import { BoldText } from "../Text/bold-text";
import Image from "next/image";
import { Quantity } from "../Text/quantity";

interface WeatherLabelProps {
  title: string;
  icon: any;
  value: string | number | undefined;
  alt: string;
}

export function WeatherLabel({ title, icon, value, alt }: WeatherLabelProps) {
  return (
    <article className="weather-label grid grid-cols-1 bg-[#A6D6D9] rounded-[13px] p-4">
      <section className="title">
        <BoldText isCenter={true}>{title}</BoldText>
      </section>
      <section className="content grid grid-cols-ratio-1-2 justify-items-center items-center">
        <Image alt={alt} src={icon} width="100" height="100" />
        <BoldMediumText>
          <Quantity type="precent">{value}</Quantity>
        </BoldMediumText>
      </section>
    </article>
  );
}
