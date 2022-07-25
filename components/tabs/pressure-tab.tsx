import { Fragment } from "react";

export function PressureTab({ main }:any) {
  return (
    <Fragment>
      {!main?.sea_level || !main?.grnd_level ? (
        <div className="pressure-tab rounded-md grid grid-cols-1 items-center justify-items-center bg-white/[0.12]">
          <div>
            <p>Pressure</p>
            <p className="text-4xl">{main?.pressure} hPa</p>
          </div>
        </div>
      ) : (
        <div className="pressure-tab grid grid-cols-2 grid-rows-1 gap-4">
          <div className="bg-white/[0.12] rounded-md grid grid-cols-1 items-center justify-items-center">
            <div className="text-center">
              <p>Ground level</p>
              <p className="text-4xl">{main?.grnd_level} hPa</p>
            </div>
          </div>
          <div className="bg-white/[0.12] rounded-md grid grid-cols-1 items-center justify-items-center">
            <div className="text-center">
              <p>Sea level</p>
              <p className="text-4xl">{main?.sea_level} hPa</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
