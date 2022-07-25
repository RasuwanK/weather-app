export function WindTab({ windSpeed, windDeg, windGust }: any) {
  return (
    <div className="wind-tab grid gap-4 grid-cols-1 grid-rows-ratio-2-1-1 lg:grid-cols-ratio-2-1-1">
      <div className="bg-white/[0.12] grid grid-cols-1 items-center justify-items-center rounded-md">
        <div>
          <p className="text-center">Wind speed</p>
          <p className="text-4xl text-center">
            {windSpeed} ms<sup>-1</sup>
          </p>
        </div>
      </div>
      <div className="bg-white/[0.12] grid grid-cols-1 items-center justify-items-center rounded-md">
        <div>
          <p className="text-center">Wind direction</p>
          <p className="text-4xl text-center">{windDeg}</p>
        </div>
      </div>
      <div className="bg-white/[0.12] grid grid-cols-1 items-center justify-items-center rounded-md">
        <div>
          <p className="text-center">Wind gust</p>
          <p className="text-4xl text-center">
            {windGust} ms<sup>-1</sup>
          </p>
        </div>
      </div>
    </div>
  );
}
