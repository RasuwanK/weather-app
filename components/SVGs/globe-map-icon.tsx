interface Dimensions {
  width: number | string;
  height: number | string;
}

interface GlobeMapIconProps {
  dimensions: Dimensions;
}

export function GlobeMapIcon({ dimensions }: GlobeMapIconProps) {
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
      viewBox="0 0 511.999 511.999"
      /* style="enable-background:new 0 0 511.999 511.999;" */
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M101.145,31.011c33.952,0.918,63.175,21.046,77.125,49.991c5.066-0.393,11.32-0.665,17.319-0.665h0.258h0.012
			c4.6,0.006,9.292,0.176,12.185,0.349c0-25.193,0-45.939,0-71.056L101.145,31.011z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M241.743,9.248c0,8.38,0,67.941,0,75.812c74.8,13.899,116.887,63.842,116.887,63.842c0-11.978,0-105.453,0-119.528
			L241.743,9.248z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M492.65,14.759L392.329,29.806c0,71.379,0,96.617,0,164.122c19.32,33.342,30.47,72.21,30.555,113.234l74.765-11.215
			c8.248-1.238,14.349-8.323,14.349-16.663V31.422C512,21.143,502.854,13.232,492.65,14.759z M481.995,120.294
			c6.58,6.58,6.58,17.248,0,23.829c-6.533,6.532-17.208,6.622-23.829,0l-7.125-7.125l-7.125,7.125c-6.579,6.58-17.248,6.58-23.829,0
			c-6.58-6.58-6.58-17.248,0-23.829l7.125-7.125l-7.125-7.125c-6.58-6.58-6.58-17.248,0-23.829c6.58-6.58,17.25-6.58,23.829,0
			l7.125,7.125l7.125-7.125c6.675-6.676,17.375-6.453,23.829,0c6.58,6.579,6.58,17.248,0,23.829
			c-2.653,2.653-4.458,4.458-7.125,7.125C477.539,115.838,479.34,117.638,481.995,120.294z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M98.732,64.648c-30.119,0-54.537,24.416-54.537,54.537c0,21.379,31.904,67.919,46.908,88.624
			c3.763,5.191,11.505,5.203,15.28,0.015c15.014-20.634,46.885-66.984,46.885-88.638C153.269,89.066,128.853,64.648,98.732,64.648z
			 M98.734,142.269c-12.75,0-23.084-10.336-23.084-23.084s10.334-23.084,23.084-23.084c12.75,0,23.084,10.334,23.084,23.084
			C121.818,131.934,111.483,142.269,98.734,142.269z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M195.59,111.572c-2.94,0-5.864,0.07-8.772,0.203c0.047,0.818,0.062,1.642,0.08,2.466
			c-0.026,0.001-0.049,0.001-0.075,0.002c0.76,13.701-2.303,25.436-8.082,39.013v54.393c-9.362-0.985-18.566-2.776-27.521-5.36
			c-3.7,5.622-16.312,24.277-20.416,28.829c-8.753,9.707-21.669,15.122-35.071,14.174c-2.6,14.602-4.28,29.861-4.984,45.496H36.575
			c2.615-24.858,10.952-48.034,23.663-68.191c-5.788-8.133-20.769-31.248-21.419-32.246C14.45,222.97,0,263.408,0,307.162
			C0,415.01,87.741,502.751,195.59,502.751c107.848,0,195.589-87.741,195.589-195.589
			C391.179,199.313,303.438,111.572,195.59,111.572z M133.029,231.904c14.703,5.02,30.039,8.257,45.711,9.617v49.267h-54.266
			C125.527,269.254,128.563,249.46,133.029,231.904z M36.576,324.486h54.173v0.001c1.157,25.672,4.947,50.327,11.115,72.728
			c-8.875,4.923-17.39,10.564-25.467,16.888C54.621,389.749,40.177,358.711,36.576,324.486z M101.851,437.096
			c3.664-2.659,7.436-5.139,11.29-7.466c3.373,7.822,6.83,14.602,10.398,20.729C115.942,446.508,108.694,442.064,101.851,437.096z
			 M124.474,324.487h54.266v49.267c-15.672,1.358-31.008,4.597-45.711,9.617C128.563,365.815,125.527,346.021,124.474,324.487z
			 M178.741,462.346c-12.855-7.805-25.281-24.131-35.03-46.976c11.29-3.874,23.029-6.482,35.03-7.745V462.346z M354.604,290.788
			h-54.173c-1.157-25.672-4.947-50.327-11.115-72.729c8.875-4.923,17.39-10.564,25.467-16.888
			C336.559,225.524,351.002,256.563,354.604,290.788z M289.329,178.178c-3.664,2.659-7.436,5.139-11.29,7.466
			c-1.556-3.606-3.185-7.118-4.888-10.524c-1.774-3.547-3.614-6.947-5.512-10.204C275.237,168.766,282.485,173.21,289.329,178.178z
			 M212.44,152.928c12.854,7.806,25.28,24.131,35.029,46.977c-11.29,3.873-23.029,6.48-35.029,7.744V152.928z M212.44,462.346
			v-54.721c12,1.264,23.739,3.871,35.029,7.745C237.72,438.215,225.294,454.541,212.44,462.346z M258.149,383.371
			c-14.702-5.02-30.037-8.257-45.71-9.617v-49.267h54.265C265.652,346.021,262.616,365.815,258.149,383.371z M212.44,290.788V241.52
			c15.672-1.359,31.008-4.597,45.71-9.617c4.466,17.556,7.503,37.35,8.555,58.884H212.44z M267.639,450.359
			c3.569-6.125,7.026-12.907,10.4-20.729c3.854,2.326,7.626,4.807,11.29,7.466C282.486,442.065,275.237,446.508,267.639,450.359z
			 M314.783,414.104c-8.077-6.325-16.591-11.966-25.468-16.889c6.167-22.401,9.958-47.057,11.115-72.728h54.173
			C351.002,358.712,336.559,389.75,314.783,414.104z"
          />
        </g>
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
