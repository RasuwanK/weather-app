interface Dimensions {
  width: number | string;
  height: number | string;
}

interface QuestionIconProps {
  dimensions: Dimensions;
}

export function QuestionIcon({ dimensions }: QuestionIconProps) {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      width={dimensions.width}
      height={dimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 52 52"
      /* style="enable-background:new 0 0 52 52;" */
      xmlSpace="preserve"
    >
      <path
        d="M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M28,41c0,1.104-0.896,2-2,2s-2-0.896-2-2v-2
	c0-1.104,0.896-2,2-2s2,0.896,2,2V41z M30.874,24.567C29.102,25.711,28,27.853,28,30.158V33c0,1.104-0.896,2-2,2s-2-0.896-2-2
	v-2.842c0-3.706,1.76-7.053,4.706-8.952c1.46-0.942,2.317-2.541,2.293-4.277c-0.036-2.635-2.293-4.892-4.928-4.928
	c-1.366-0.067-2.622,0.492-3.582,1.438C21.529,14.387,21,15.651,21,17c0,1.104-0.896,2-2,2s-2-0.896-2-2
	c0-2.428,0.952-4.703,2.681-6.408C21.378,8.918,23.617,8,25.998,8c0.043,0,0.086,0.001,0.13,0.001
	c4.824,0.067,8.804,4.047,8.871,8.871C35.043,19.996,33.501,22.873,30.874,24.567z"
      />
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
