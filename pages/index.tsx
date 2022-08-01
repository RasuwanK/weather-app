import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="flex flex-col w-full h-[1000px]">
        <p className="welcome-title text-4xl sm:text-6xl text-center p-4 text-[#1E1C1F]">The Weather Station</p>
      </div>
    </div>
  );
}
