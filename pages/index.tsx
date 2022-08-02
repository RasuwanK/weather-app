import Head from "next/head";
import AirIcon from "../components/SVGs/air-icon";
import { GlobeMapIcon } from "../components/SVGs/globe-map-icon";
import { SunClock } from "../components/SVGs/sun-clock-icon";
import { WelcomeCard } from "../components/WelcomCard/welcome-card";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="flex flex-col items-center gap-[100px] w-full mb-[100px]">
        <p className="welcome-title text-4xl sm:text-6xl text-center p-4 text-[#1E1C1F]">
          The Weather Station<sup className="text-sm">(beta)</sup>
        </p>
        <p className="welcome-message text-2xl text-center p-4">
          We provide you the instant weather forecast based on your live
          detected location
        </p>
        <div className="welcome-cards flex flex-row items-stretch justify-center w-[90%] mx:w-[100%] gap-10 flex-wrap">
          <WelcomeCard
            title="Current Weather"
            icon={<GlobeMapIcon dimensions={{ width: 90, height: 90 }} />}
            description="We provide you live weather based on your current position no matter where you are."
            redirect="/current"
          />
          <WelcomeCard
            title="Three Hour forecast"
            icon={<SunClock dimensions={{ width: 90, height: 90 }} />}
            description="We provide you three-hour forecast based on your auto detected current position no matter where you are."
            redirect="/"
          />
          <WelcomeCard
            title="Air pollution"
            icon={<AirIcon dimensions={{ width: 90, height: 90 }} />}
            description="Based on your position we provide you the best poisonous air composition chart for you to get yourself safe"
            redirect="/air-pollution"
          />
        </div>
      </div>
    </div>
  );
}
