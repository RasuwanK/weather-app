import { TempTab } from "../../interfaces/props";

export function TempTab({ temp, tempMin, tempMax }: TempTab) {
  return (
    <div className="temp-tab grid gap-4 grid-cols-ratio-1-2">
      <div className="current-temp grid grid-cols-1 rounded-md items-center justify-items-center bg-white/[0.12]">
        <p className="text-4xl font-medium">{temp} C</p>
      </div>
      <div className="temp-details grid grid-cols-1 gap-2">
        <div className="details-col grid grid-cols-ratio-2-1  border-2 p-4 rounded-md items-center justify-items-center bg-white/[0.12] ">
          <div className="key border-r-2 text-center">
            Minimum temperature at the moment
          </div>
          <div className="val text-center">{tempMin}</div>
        </div>
        <div className="details-col grid grid-cols-ratio-2-1 p-4 rounded-md items-center justify-items-center  bg-white/[0.12]">
          <div className="key text-center">
            Maximum temperature at the moment
          </div>
          <div className="val text-center">{tempMax}</div>
        </div>
      </div>
    </div>
  );
}
