import Image from "next/image";
import { useEffect, useState } from "react";
import loadingIcon from "../../public/weather-icons/Magnify-1.4s-200px.gif";
import { BoldText } from "../Text/bold-text";

export function LoadingLocation() {
  const [windowHeight, setWindowHeight] = useState<number>();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <aside
      className="loading flex flex-col w-full items-center justify-center"
      style={{ height: windowHeight }}
    >
      <Image
        alt="Loading satellite image"
        width="120"
        height="120"
        src={loadingIcon}
      />
      <BoldText isCenter={true}>Collecting location data</BoldText>
    </aside>
  );
}
