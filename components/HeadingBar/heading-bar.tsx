import { LocationIcon } from "../SVGs/location-icon";

interface HeadingBarProps {
  location: string | undefined;
}

export function HeadingBar({ location }: HeadingBarProps) {
  return (
    <header className="header grid grid-cols-2">
      <p className="justify-self-start p-2 text-black/[0.65] text-[16px] sx:text-[21px] font-semibold">
        {"Today's weather"}
      </p>
      <div className="justify-self-end grid grid-cols-ratio-1-2 items-center p-3">
        <LocationIcon dimensions={{ width: 40, height: 40 }} />
        <p className={`text-[16px] sx:text-[21px]`}>{location}</p>
      </div>
    </header>
  );
}
