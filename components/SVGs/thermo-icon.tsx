import { Dimensions } from "../../interfaces/global";

interface ThermIconProps {
  dimensions: Dimensions;
}

export function ThermoIcon({ dimensions }: ThermIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimensions.width}
      height={dimensions.height}
      baseProfile="tiny"
      version="1.2"
      viewBox="0 0 24 24"
    >
      <path d="M13 15.071V9.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v5.571c-.86.224-1.5 1-1.5 1.929 0 1.103.896 2 2 2s2-.897 2-2c0-.929-.64-1.705-1.5-1.929zm3-1.612V5.5C16 3.57 14.43 2 12.5 2S9 3.57 9 5.5v7.959A4.937 4.937 0 0 0 7.5 17c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.39-.578-2.639-1.5-3.541zM12.5 20c-1.654 0-3-1.346-3-3a2.99 2.99 0 0 1 1.5-2.583V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v8.917A2.99 2.99 0 0 1 15.5 17c0 1.654-1.346 3-3 3z" />
    </svg>
  );
}
