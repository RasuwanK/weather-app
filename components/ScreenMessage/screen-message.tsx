import Image from "next/image";
import { useEffect, useState } from "react";
import { BoldText } from "../Text/bold-text";

interface ScreenMessageProps {
  image: any;
  message: string;
}

export function ScreenMessage({ image, message }: ScreenMessageProps) {
  const [windowHeight, setWindowHeight] = useState<number>();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <aside
      className="loading flex flex-col w-full items-center justify-center"
      style={{ height: windowHeight }}
    >
      <Image alt="Loading state image" width="120" height="120" src={image} />
      <BoldText isCenter={true}>{message}</BoldText>
    </aside>
  );
}
