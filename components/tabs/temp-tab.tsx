import { TempTab } from "../../interfaces/props";

export function TempTab({ temp, tempMin, tempMax }: TempTab) {
  return (
    <div className="temp-tab grid gap-4 grid-cols-ratio-2-1-1">
      <div className="current-temp grid grid-cols-1 rounded-md items-center justify-items-center bg-white/[0.12]">
        <div className="grid grid-cols-1">
          <p className="text-center">Current temperature</p>
          <p className="text-4xl font-medium text-center">{temp} C <sup>o</sup></p>
        </div>
      </div>
      <div className="current-temp grid grid-cols-1 rounded-md items-center justify-items-center bg-white/[0.12]">
        <div className="grid grid-cols-1">
          <p className="text-center">Minimum temperature</p>
          <p className="text-4xl font-medium text-center">{tempMin} C <sup>o</sup></p>
        </div>
      </div>
      <div className="current-temp grid grid-cols-1 rounded-md items-center justify-items-center bg-white/[0.12]">
        <div className="grid grid-cols-1">
          <p className="text-center">Maximum temperature</p>
          <p className="text-4xl font-medium text-center">{tempMax} C<sup> o</sup></p>
        </div>
      </div>
    </div>
  );
}
