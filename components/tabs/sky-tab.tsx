export function SkyTab({ rain, snow, humidity, coludness }:any) {
  return (
    <div className="sky-tab grid grid-cols-3 gap-4">
      <div className="bg-white/[0.12] grid grid-cols-1 rounded-md items-center justify-items-center">
        <div>
          <p className="text-4xl">Rain</p>
          {typeof rain !== "undefined" ? (
            <div className="grid grid-cols-2">
              <div>last 1 hour {rain["1h"] || "No rain"} mm</div>
              <div>last 3 hour {rain["3h"] || "No rain"} mm</div>
            </div>
          ) : (
            <div>No rainfall</div>
          )}
        </div>
      </div>
      <div className="bg-white/[0.12] grid grid-cols-1 rounded-md items-center justify-items-center">
        <div>
          <p className="text-4xl">Snow</p>
          {typeof snow !== "undefined" ? (
            <div className="grid grid-cols-2">
              <div>last 1 hour {snow["1h"] || "No rain"} mm</div>
              <div>last 3 hour {snow["3h"] || "No rain"} mm</div>
            </div>
          ) : (
            <div>No snowfall</div>
          )}
        </div>
      </div>
      <div className="bg-white/[0.12] grid grid-cols-1 rounded-md items-center justify-items-center">
        <div className="grid">
          <p className="text-center">Cloudness {coludness.all} %</p>
          <p className="text-center">Humidity {humidity} %</p>
        </div>
      </div>
    </div>
  );
}
