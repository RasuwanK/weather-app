import { useEffect, useState, Fragment } from "react";
import { BoldText } from "../Text/bold-text";

interface ScreenMessageProps {
  image: JSX.Element;
  message: string;
}

export function ScreenMessage({ image, message }: ScreenMessageProps) {
  const [windowHeight, setWindowHeight] = useState<number>();

  useEffect(() => {
    setWindowHeight(window.innerHeight - 170);
  }, []);

  return (
    <aside
      className="loading flex flex-col w-full items-center justify-center"
      style={{ height: windowHeight }}
    >
      <div className="grid grid-cols-1 justify-items-center rounded-[13px] w-[90%] sm:w-[80%] lg:w-[50%] h-[300px] bg-[#A7C3C2]/[0.75] p-11 backdrop-blur-lg">
        <div className="mb-[20px]">{image}</div>
        <BoldText isCenter={true}>{message}</BoldText>
      </div>
    </aside>
  );
}
