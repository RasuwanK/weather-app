import { Dimensions } from "../../interfaces/global";

export type Icon =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

interface WeatherIconProps {
  id: Icon | undefined;
  dimensions: Dimensions;
}

export function WeatherIcon({ id, dimensions }: WeatherIconProps) {
  if (id === "01d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transform="translate(1 1)"
        >
          <circle cx="11" cy="11" r="5" />
          <path d="M11 0v2M11 20v2M3.22 3.22l1.42 1.42M17.36 17.36l1.42 1.42M0 11h2M20 11h2M3.22 18.78l1.42-1.42M17.36 4.64l1.42-1.42" />
        </g>
      </svg>
    );
  } else if (id === "01n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 10.79A9 9 0 1 1 9.21 1 7 7 0 0 0 19 10.79z"
        />
      </svg>
    );
  } else if (id === "02d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M63.001 47.822C61.497 39.94 54.491 34 46.313 34c-5.9 0-11.357 3.096-14.431 8.038A11.923 11.923 0 0 0 27 41c-6.617 0-12 5.383-12 12 0 .344.016.69.046 1.034C9.853 55.004 6 59.592 6 64.923 6 71.03 10.969 76 17.077 76h44.805C69.667 76 76 69.667 76 61.883c0-3.91-1.56-7.542-4.396-10.229a14.19 14.19 0 0 0-8.603-3.832zM61.881 72H17.078A7.085 7.085 0 0 1 10 64.923c0-3.522 2.632-6.535 6.12-7.012l3.817-.52-.627-2.215A7.999 7.999 0 0 1 19 53c0-4.411 3.589-8 8-8 1.629 0 3.2.49 4.541 1.419l1.964 1.357.992-2.17C36.61 40.985 41.248 38 46.313 38c6.724 0 12.41 5.251 12.945 11.954l.155 1.942 1.946-.104a10.03 10.03 0 0 1 7.495 2.766A9.997 9.997 0 0 1 72 61.883C72 67.462 67.46 72 61.882 72zM27 38c6.065 0 11-4.935 11-11s-4.935-11-11-11-11 4.935-11 11 4.935 11 11 11zm0-18c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zM25 6h4v6h-4zM10.736 13.565l2.829-2.829 4.243 4.244-2.828 2.828zM6 25h6v4H6zM10.736 40.435l4.244-4.243 2.828 2.828-4.243 4.244zM42 25h6v4h-6zM36.192 14.98l4.244-4.244 2.828 2.828-4.243 4.244z" />
      </svg>
    );
  } else if (id === "02n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path
          d="M2,24.5A5.51,5.51,0,0,0,7.5,30h14a6.5,6.5,0,0,0,2.41-12.53v0a7.94,7.94,0,0,0,4.16-2.19,7.8,7.8,0,0,0,1.88-3A1,1,0,0,0,28.66,11,6,6,0,0,1,21,3.34a1,1,0,0,0-1.27-1.29,7.79,7.79,0,0,0-3,1.88A8,8,0,0,0,15,12.52a6.51,6.51,0,0,0-2.6,2A6,6,0,0,0,4,20c0,.09,0,.17,0,.26A5.47,5.47,0,0,0,2,24.5ZM18.17,5.35a6,6,0,0,1,.51-.46,8,8,0,0,0,8.43,8.43,6.32,6.32,0,0,1-.45.51,5.92,5.92,0,0,1-3.41,1.67A6.48,6.48,0,0,0,17.5,12c-.18,0-.36,0-.54,0A6,6,0,0,1,18.17,5.35ZM5.61,21.56a1.1,1.1,0,0,0,.44-1.05A3.39,3.39,0,0,1,6,20a4,4,0,0,1,6.16-3.35,1,1,0,0,0,1.42-.35,4.49,4.49,0,0,1,8.41,2,1,1,0,0,0,.73.91A4.5,4.5,0,0,1,21.5,28H7.5a3.49,3.49,0,0,1-1.89-6.44Z"
          data-name="Layer 2"
        />
      </svg>
    );
  } else if (id === "03d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M40.996 23.2a6.008 6.008 0 0 0-5.35-6.165A12.94 12.94 0 0 0 23 7c-7.168 0-13 5.832-13 13 0 .384.02.775.06 1.18C4.902 22.106 1 26.669 1 32c0 6.065 4.935 11 11 11h27c5.514 0 10-4.486 10-10a9.956 9.956 0 0 0-8.004-9.8zM39 41H12c-4.963 0-9-4.038-9-9 0-4.651 3.631-8.588 8.267-8.962l1.091-.088-.186-1.078A11.068 11.068 0 0 1 12 20c0-6.065 4.935-11 11-11 5.393 0 9.95 3.862 10.836 9.182l.145.871.882-.036A.503.503 0 0 0 35 19c2.206 0 4 1.794 4 4 0 .272-.03.553-.091.835l-.235 1.096 1.115.109A7.965 7.965 0 0 1 47 33c0 4.411-3.589 8-8 8z" />
      </svg>
    );
  } else if (id === "03n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M40.996 23.2a6.008 6.008 0 0 0-5.35-6.165A12.94 12.94 0 0 0 23 7c-7.168 0-13 5.832-13 13 0 .384.02.775.06 1.18C4.902 22.106 1 26.669 1 32c0 6.065 4.935 11 11 11h27c5.514 0 10-4.486 10-10a9.956 9.956 0 0 0-8.004-9.8zM39 41H12c-4.963 0-9-4.038-9-9 0-4.651 3.631-8.588 8.267-8.962l1.091-.088-.186-1.078A11.068 11.068 0 0 1 12 20c0-6.065 4.935-11 11-11 5.393 0 9.95 3.862 10.836 9.182l.145.871.882-.036A.503.503 0 0 0 35 19c2.206 0 4 1.794 4 4 0 .272-.03.553-.091.835l-.235 1.096 1.115.109A7.965 7.965 0 0 1 47 33c0 4.411-3.589 8-8 8z" />
      </svg>
    );
  } else if (id === "04d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 64 64"
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 64 64"
      >
        <path d="M43.7,36.4h8.4c4.5,0,8.1-3.6,8.1-8.1c0-2.2-0.8-4.2-2.4-5.7c-1.3-1.3-3-2.1-4.8-2.3c-0.2-1.5-0.9-2.9-2-4c-1.3-1.3-3.1-2-4.9-2c-1,0-1.9,0.2-2.8,0.6c-1.5-4.2-5.4-7-9.9-7c-4.3,0-8.1,2.6-9.7,6.4c-1.7-1.2-3.8-1.9-6-1.9c-5.8,0-10.5,4.7-10.5,10.5c0,0.6,0.1,1.3,0.2,1.9C3.2,25.2,0,28.7,0,32.9c0,2.2,0.8,4.2,2.4,5.7C3.9,40.1,5.9,41,8.1,41h28.3C39.6,41,42.4,39.1,43.7,36.4z M33.4,9.8c4,0,7.5,2.7,8.4,6.7c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0.1,0.6,0.1,0.9-0.1c0.8-0.6,1.8-0.9,2.8-0.9c1.3,0,2.6,0.5,3.5,1.5c0.9,0.9,1.5,2.2,1.5,3.5c0,0.5,0.4,1,1,1c1.6,0,3.2,0.6,4.4,1.8c1.2,1.2,1.8,2.7,1.8,4.4c0,3.4-2.8,6.2-6.2,6.2h-7.8c0.1-0.5,0.2-1.1,0.2-1.6c0-2.2-0.8-4.2-2.4-5.7c-1.3-1.3-3-2.1-4.8-2.3c-0.5-3.4-3.4-6-6.9-6c-1,0-1.9,0.2-2.8,0.6c-0.5-1.4-1.3-2.7-2.4-3.8C26.5,12.1,29.7,9.8,33.4,9.8z M36.4,39.1H8.1c-1.6,0-3.2-0.6-4.4-1.8c-1.2-1.2-1.8-2.7-1.8-4.4c0-3.4,2.8-6.2,6.2-6.2h0.5c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.2-0.6,0.1-0.9c-0.2-0.8-0.4-1.7-0.4-2.5c0-4.7,3.9-8.6,8.6-8.6c4,0,7.5,2.8,8.4,6.7c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0.1,0.6,0.1,0.9-0.1c0.8-0.6,1.8-0.9,2.8-0.9c2.8,0,5,2.2,5,5c0,0.5,0.4,1,1,1c1.6,0,3.2,0.6,4.4,1.8c1.2,1.2,1.8,2.7,1.8,4.4C42.6,36.3,39.8,39.1,36.4,39.1z" />
        <path d="M62.5,47.4c-0.8-0.8-1.7-1.3-2.8-1.4c-0.4-2-2.2-3.6-4.4-3.6c-0.5,0-1,0.1-1.4,0.2c-1-2.4-3.4-4-6-4c-3.6,0-6.6,2.9-6.6,6.6c0,0.3,0,0.5,0,0.8c-2.4,0.4-4.2,2.5-4.2,5.1c0,1.4,0.5,2.7,1.5,3.6c1,1,2.3,1.5,3.6,1.5h16.6c2.8,0,5.1-2.3,5.1-5.1C64,49.7,63.5,48.4,62.5,47.4z M58.9,54.2H42.3c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3c0-1.8,1.4-3.2,3.2-3.2h0.3c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.2-0.6,0.1-0.9c-0.1-0.4-0.2-0.9-0.2-1.4c0-2.6,2.1-4.6,4.6-4.6c2.1,0,4,1.5,4.5,3.6c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0.1,0.6,0.1,0.9-0.1c0.4-0.3,0.9-0.4,1.4-0.4c1.4,0,2.5,1.1,2.5,2.5c0,0.5,0.4,1,1,1c0.9,0,1.7,0.3,2.3,0.9c0.6,0.6,0.9,1.4,0.9,2.3C62.1,52.8,60.6,54.2,58.9,54.2z" />
      </svg>
    );
  } else if (id === "04n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 64 64"
        viewBox="0 0 64 64"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M43.7,36.4h8.4c4.5,0,8.1-3.6,8.1-8.1c0-2.2-0.8-4.2-2.4-5.7c-1.3-1.3-3-2.1-4.8-2.3c-0.2-1.5-0.9-2.9-2-4c-1.3-1.3-3.1-2-4.9-2c-1,0-1.9,0.2-2.8,0.6c-1.5-4.2-5.4-7-9.9-7c-4.3,0-8.1,2.6-9.7,6.4c-1.7-1.2-3.8-1.9-6-1.9c-5.8,0-10.5,4.7-10.5,10.5c0,0.6,0.1,1.3,0.2,1.9C3.2,25.2,0,28.7,0,32.9c0,2.2,0.8,4.2,2.4,5.7C3.9,40.1,5.9,41,8.1,41h28.3C39.6,41,42.4,39.1,43.7,36.4z M33.4,9.8c4,0,7.5,2.7,8.4,6.7c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0.1,0.6,0.1,0.9-0.1c0.8-0.6,1.8-0.9,2.8-0.9c1.3,0,2.6,0.5,3.5,1.5c0.9,0.9,1.5,2.2,1.5,3.5c0,0.5,0.4,1,1,1c1.6,0,3.2,0.6,4.4,1.8c1.2,1.2,1.8,2.7,1.8,4.4c0,3.4-2.8,6.2-6.2,6.2h-7.8c0.1-0.5,0.2-1.1,0.2-1.6c0-2.2-0.8-4.2-2.4-5.7c-1.3-1.3-3-2.1-4.8-2.3c-0.5-3.4-3.4-6-6.9-6c-1,0-1.9,0.2-2.8,0.6c-0.5-1.4-1.3-2.7-2.4-3.8C26.5,12.1,29.7,9.8,33.4,9.8z M36.4,39.1H8.1c-1.6,0-3.2-0.6-4.4-1.8c-1.2-1.2-1.8-2.7-1.8-4.4c0-3.4,2.8-6.2,6.2-6.2h0.5c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.2-0.6,0.1-0.9c-0.2-0.8-0.4-1.7-0.4-2.5c0-4.7,3.9-8.6,8.6-8.6c4,0,7.5,2.8,8.4,6.7c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0.1,0.6,0.1,0.9-0.1c0.8-0.6,1.8-0.9,2.8-0.9c2.8,0,5,2.2,5,5c0,0.5,0.4,1,1,1c1.6,0,3.2,0.6,4.4,1.8c1.2,1.2,1.8,2.7,1.8,4.4C42.6,36.3,39.8,39.1,36.4,39.1z" />
        <path d="M62.5,47.4c-0.8-0.8-1.7-1.3-2.8-1.4c-0.4-2-2.2-3.6-4.4-3.6c-0.5,0-1,0.1-1.4,0.2c-1-2.4-3.4-4-6-4c-3.6,0-6.6,2.9-6.6,6.6c0,0.3,0,0.5,0,0.8c-2.4,0.4-4.2,2.5-4.2,5.1c0,1.4,0.5,2.7,1.5,3.6c1,1,2.3,1.5,3.6,1.5h16.6c2.8,0,5.1-2.3,5.1-5.1C64,49.7,63.5,48.4,62.5,47.4z M58.9,54.2H42.3c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3c0-1.8,1.4-3.2,3.2-3.2h0.3c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.2-0.6,0.1-0.9c-0.1-0.4-0.2-0.9-0.2-1.4c0-2.6,2.1-4.6,4.6-4.6c2.1,0,4,1.5,4.5,3.6c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0.1,0.6,0.1,0.9-0.1c0.4-0.3,0.9-0.4,1.4-0.4c1.4,0,2.5,1.1,2.5,2.5c0,0.5,0.4,1,1,1c0.9,0,1.7,0.3,2.3,0.9c0.6,0.6,0.9,1.4,0.9,2.3C62.1,52.8,60.6,54.2,58.9,54.2z" />
      </svg>
    );
  } else if (id === "09d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM8,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,8,16Zm4-2a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm6.42-7.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,16,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,16,16ZM12,9a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z" />
      </svg>
    );
  } else if (id === "09n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM8,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,8,16Zm4-2a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm6.42-7.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,16,11Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V17A1,1,0,0,0,16,16ZM12,9a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z" />
      </svg>
    );
  } else if (id === "10d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M21,7h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,3.8V3a1,1,0,0,0-2,0v.8a4.1,4.1,0,0,0-1.26.52l-.57-.56a1,1,0,0,0-1.41,1.41l.56.57c-.09.15-.16.32-.24.48A5.85,5.85,0,0,0,10.5,6a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,14.5,1.5,1.5,0,0,1,5.5,13a1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,15.61a1,1,0,0,0,1.1,1.68A4.34,4.34,0,0,0,19,13.67a4.19,4.19,0,0,0-.3-1.55l.13.12a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.56-.56A4.25,4.25,0,0,0,20.2,9H21a1,1,0,0,0,0-2ZM17.66,9.65h0a2.09,2.09,0,0,1-.6.42A4.17,4.17,0,0,0,16,9.54a6.12,6.12,0,0,0-2.09-2.49,2.42,2.42,0,0,1,.46-.7h0a2.43,2.43,0,0,1,3.3,0h0a2.37,2.37,0,0,1,0,3.3ZM8.5,14a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,8.5,14Zm4-1a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V14A1,1,0,0,0,12.5,13Z" />
      </svg>
    );
  } else if (id === "10n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M8.5,14a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,8.5,14Zm4-1a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V14A1,1,0,0,0,12.5,13Zm9.2-5.93a1,1,0,0,0-.94-.26,3,3,0,0,1-.65.08,3,3,0,0,1-3-3,3.13,3.13,0,0,1,.08-.66,1,1,0,0,0-.26-.93A1,1,0,0,0,16,2a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,6a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,14.5,1.5,1.5,0,0,1,5.5,13a1,1,0,0,0,1-1,4,4,0,0,1,4-4,3.91,3.91,0,0,1,2.17.66l0,0a3.94,3.94,0,0,1,1.57,2,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,15.61a1,1,0,0,0,1.1,1.68A4.32,4.32,0,0,0,19,13.67a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,8,1,1,0,0,0,21.7,7.07ZM17.11,9.89a2.72,2.72,0,0,1-.42,0A4.6,4.6,0,0,0,16,9.54a6.06,6.06,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,9.89Z" />
      </svg>
    );
  } else if (id === "11d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions.width}
        height={dimensions.height}
        version="1.0"
      >
        <path
          fill="#010101"
          d="M14.039 13.439a.35.35 0 0 1 0-.7h5.578a2.488 2.488 0 0 0 2.34-2.478 2.482 2.482 0 0 0-2.482-2.477c-.152 0-.329.026-.48.052a.351.351 0 0 1-.403-.403c.025-.152.052-.303.052-.479 0-2.13-1.723-3.864-3.84-3.864-.876 0-1.732.313-2.409.88a.35.35 0 0 1-.45-.536 4.46 4.46 0 0 1 2.859-1.044c2.503 0 4.541 2.047 4.541 4.564 0 .046-.001.091-.004.135.046-.002.092-.004.135-.004a3.183 3.183 0 0 1 3.182 3.177 3.194 3.194 0 0 1-3.021 3.178l-5.598-.001z"
        />
        <path
          fill="#010101"
          d="M10.414 21.611a.35.35 0 0 1-.343-.42l.708-3.482H9.281a.352.352 0 0 1-.338-.444l1.19-4.27a.35.35 0 0 1 .337-.256h3.087a.35.35 0 0 1 .289.548l-1.408 2.054h1.799a.35.35 0 0 1 .289.548l-3.823 5.57a.353.353 0 0 1-.289.152zm-.672-4.603h1.465a.35.35 0 0 1 .343.42l-.45 2.215 2.473-3.603h-1.799a.35.35 0 0 1-.289-.548l1.408-2.054h-2.157l-.994 3.57z"
        />
        <path
          fill="#010101"
          d="M14.237 13.439H4.439a.343.343 0 0 1-.153-.038 3.25 3.25 0 0 1-2.944-3.253 3.298 3.298 0 0 1 3.295-3.291c.075 0 .146 0 .217.002a4.571 4.571 0 0 1 4.568-4.47c2.504 0 4.542 2.047 4.542 4.564 0 .046-.001.091-.004.134.044-.002.089-.004.135-.004 1.739 0 3.154 1.425 3.154 3.177 0 1.715-1.287 3.081-2.992 3.178l-.02.001zm-9.688-.7h9.678c1.325-.08 2.322-1.144 2.322-2.478 0-1.366-1.101-2.477-2.454-2.477-.177 0-.329.026-.48.052a.351.351 0 0 1-.403-.403c.025-.152.052-.303.052-.479 0-2.13-1.723-3.864-3.841-3.864a3.87 3.87 0 0 0-3.869 3.864c0 .038.006.071.01.105.01.065.018.131.018.206a.35.35 0 0 1-.446.335c-.151-.043-.289-.043-.498-.043a2.595 2.595 0 0 0-2.595 2.59 2.557 2.557 0 0 0 2.395 2.564.342.342 0 0 1 .111.028z"
        />
      </svg>
    );
  } else if (id === "11n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions.width}
        height={dimensions.height}
        version="1.0"
      >
        <path
          fill="#010101"
          d="M14.039 13.439a.35.35 0 0 1 0-.7h5.578a2.488 2.488 0 0 0 2.34-2.478 2.482 2.482 0 0 0-2.482-2.477c-.152 0-.329.026-.48.052a.351.351 0 0 1-.403-.403c.025-.152.052-.303.052-.479 0-2.13-1.723-3.864-3.84-3.864-.876 0-1.732.313-2.409.88a.35.35 0 0 1-.45-.536 4.46 4.46 0 0 1 2.859-1.044c2.503 0 4.541 2.047 4.541 4.564 0 .046-.001.091-.004.135.046-.002.092-.004.135-.004a3.183 3.183 0 0 1 3.182 3.177 3.194 3.194 0 0 1-3.021 3.178l-5.598-.001z"
        />
        <path
          fill="#010101"
          d="M10.414 21.611a.35.35 0 0 1-.343-.42l.708-3.482H9.281a.352.352 0 0 1-.338-.444l1.19-4.27a.35.35 0 0 1 .337-.256h3.087a.35.35 0 0 1 .289.548l-1.408 2.054h1.799a.35.35 0 0 1 .289.548l-3.823 5.57a.353.353 0 0 1-.289.152zm-.672-4.603h1.465a.35.35 0 0 1 .343.42l-.45 2.215 2.473-3.603h-1.799a.35.35 0 0 1-.289-.548l1.408-2.054h-2.157l-.994 3.57z"
        />
        <path
          fill="#010101"
          d="M14.237 13.439H4.439a.343.343 0 0 1-.153-.038 3.25 3.25 0 0 1-2.944-3.253 3.298 3.298 0 0 1 3.295-3.291c.075 0 .146 0 .217.002a4.571 4.571 0 0 1 4.568-4.47c2.504 0 4.542 2.047 4.542 4.564 0 .046-.001.091-.004.134.044-.002.089-.004.135-.004 1.739 0 3.154 1.425 3.154 3.177 0 1.715-1.287 3.081-2.992 3.178l-.02.001zm-9.688-.7h9.678c1.325-.08 2.322-1.144 2.322-2.478 0-1.366-1.101-2.477-2.454-2.477-.177 0-.329.026-.48.052a.351.351 0 0 1-.403-.403c.025-.152.052-.303.052-.479 0-2.13-1.723-3.864-3.841-3.864a3.87 3.87 0 0 0-3.869 3.864c0 .038.006.071.01.105.01.065.018.131.018.206a.35.35 0 0 1-.446.335c-.151-.043-.289-.043-.498-.043a2.595 2.595 0 0 0-2.595 2.59 2.557 2.557 0 0 0 2.395 2.564.342.342 0 0 1 .111.028z"
        />
      </svg>
    );
  } else if (id === "13d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions.width}
        height={dimensions.height}
        baseProfile="tiny"
        overflow="inherit"
        version="1.2"
        viewBox="0 0 50 50"
      >
        <path d="M23 47.689v-6.342l-3.357 1.992L18 42.305v-2.229l5-2.986v-4.168l-4 2.451v-4.416l-4 2.094v5.99l-1.653 1.23L12 39.16v-4.012L6.426 38.27 4 37.271v-2.529l5.685-3.17L6 29.75v-2.32l2.123-1.127 5.214 3.068 3.612-2.084-.082-.065-3.665-2.123 3.568-2.228-3.577-2.083L7.98 23.84 6 22.871v-2.307l3.542-1.978L4 15.533v-2.529l2.321-1.114L12 15.087v-4.076l1.485-1.127 1.943 1.18-.056 6.105 3.673 2.122.033-4.311L23 17.079v-4.167l-5-2.988V7.71l1.643-1.05L23 8.652V2.324L24.994 1 27 2.324v6.328l3.906-2.031L33 7.84v1.992l-6 3.08v4.167l4-2.267v4.534l4-2.084v-6.524l1.455-.866 1.545.865v4.167l5.842-3.08L46 13.042v2.359l-5.495 3.17L44 20.525v2.254l-1.83.996-5.327-3.158-3.679 2.346 3.549 2.228-3.659 2.122 3.772 1.992 5.389-2.986L44 27.535v2.15l-3.32 1.887 5.32 3.17v2.49l-2.522 1.037L38 35.281v3.955l-1.52 1.049L35 39.236v-6.002l-4-2.213v4.168l-4-2.268v4.168l5 2.986v2.359l-1.647.904L27 41.348v6.342L24.994 49 23 47.689zm-1.466-22.597L23.42 28h3.514l1.613-2.908L26.843 22h-3.514l-1.795 3.092z" />
      </svg>
    );
  } else if (id === "13n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions.width}
        height={dimensions.height}
        baseProfile="tiny"
        overflow="inherit"
        version="1.2"
        viewBox="0 0 50 50"
      >
        <path d="M23 47.689v-6.342l-3.357 1.992L18 42.305v-2.229l5-2.986v-4.168l-4 2.451v-4.416l-4 2.094v5.99l-1.653 1.23L12 39.16v-4.012L6.426 38.27 4 37.271v-2.529l5.685-3.17L6 29.75v-2.32l2.123-1.127 5.214 3.068 3.612-2.084-.082-.065-3.665-2.123 3.568-2.228-3.577-2.083L7.98 23.84 6 22.871v-2.307l3.542-1.978L4 15.533v-2.529l2.321-1.114L12 15.087v-4.076l1.485-1.127 1.943 1.18-.056 6.105 3.673 2.122.033-4.311L23 17.079v-4.167l-5-2.988V7.71l1.643-1.05L23 8.652V2.324L24.994 1 27 2.324v6.328l3.906-2.031L33 7.84v1.992l-6 3.08v4.167l4-2.267v4.534l4-2.084v-6.524l1.455-.866 1.545.865v4.167l5.842-3.08L46 13.042v2.359l-5.495 3.17L44 20.525v2.254l-1.83.996-5.327-3.158-3.679 2.346 3.549 2.228-3.659 2.122 3.772 1.992 5.389-2.986L44 27.535v2.15l-3.32 1.887 5.32 3.17v2.49l-2.522 1.037L38 35.281v3.955l-1.52 1.049L35 39.236v-6.002l-4-2.213v4.168l-4-2.268v4.168l5 2.986v2.359l-1.647.904L27 41.348v6.342L24.994 49 23 47.689zm-1.466-22.597L23.42 28h3.514l1.613-2.908L26.843 22h-3.514l-1.795 3.092z" />
      </svg>
    );
  } else if (id === "50d") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M10,21H8a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm1-4H6a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2ZM18,2a1,1,0,0,0-1-1H3A1,1,0,0,0,3,3H17A1,1,0,0,0,18,2Zm3,3H6A1,1,0,0,0,6,7H21a1,1,0,0,0,0-2ZM19,9H10a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Zm-5,4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
      </svg>
    );
  } else if (id === "50n") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M10,21H8a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm1-4H6a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2ZM18,2a1,1,0,0,0-1-1H3A1,1,0,0,0,3,3H17A1,1,0,0,0,18,2Zm3,3H6A1,1,0,0,0,6,7H21a1,1,0,0,0,0-2ZM19,9H10a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Zm-5,4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={dimensions.width}
        height={dimensions.height}
      >
        <path d="M8,13a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14A1,1,0,0,0,8,13Zm4-2a1,1,0,0,0-1,1v9a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm6.42-4.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,13a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14A1,1,0,0,0,16,13Z" />
      </svg>
    );
  }
}