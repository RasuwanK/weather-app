import { LocationIcon } from "../SVGs/location-icon";

interface HeadingBarProps {
  location: string | undefined;
}

export function HeadingBar({ location }: HeadingBarProps) {
  return (
    <header className="header flex flex-row">
      <div className="flex flex-row items-center p-3">
        <LocationIcon dimensions={{ width: 40, height: 40 }} />
        <p className={`text-[16px] sx:text-[21px]`}>{location}</p>
      </div>
    </header>
  );
}
