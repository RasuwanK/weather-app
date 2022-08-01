import { Dimensions } from "../../interfaces/global";

interface NoLocationProps {
  dimensions: Dimensions;
}

export function Lock({ dimensions }: NoLocationProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      width={dimensions.width}
      height={dimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 330 330"
      /* style="enable-background:new 0 0 330 330;" */
      xmlSpace="preserve"
    >
      <g id="XMLID_516_">
        <path
          id="XMLID_517_"
          d="M15,160c8.284,0,15-6.716,15-15V85c0-30.327,24.673-55,55-55c30.327,0,55,24.673,55,55v45h-25
		c-8.284,0-15,6.716-15,15v170c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15H170V85
		c0-46.869-38.131-85-85-85S0,38.131,0,85v60C0,153.284,6.716,160,15,160z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
