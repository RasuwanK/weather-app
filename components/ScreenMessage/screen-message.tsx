import { useEffect, useState, Fragment } from "react";
import { BoldText } from "../Text/bold-text";

interface ScreenMessageProps {
  image: JSX.Element;
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
      <div className="mb-[20px]">{image}</div>
      <BoldText isCenter={true}>{message}</BoldText>
    </aside>
  );
}
