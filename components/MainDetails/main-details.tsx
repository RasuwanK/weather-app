import Image from "next/image";

interface MainDetailsProps {
  icon: any;
  main: string | undefined;
  description: string | undefined;
}

export function MainDetails({ icon, main, description }: MainDetailsProps) {
  return (
    <article className="main-details sm:w-[400px] w-full mt-11 grid grid-cols-1 sx:grid-cols-2 justify-items-center">
      <section className="icon">
        <Image alt="Weather Icon" width="150" height="150" src={icon} />
      </section>
      <section className="content">
        <h1 className="font-bold sm:text-[40px] text-[30px]">{main}</h1>
        <p className="font-semibold sm:text-[20px] text-[15px]">{description}</p>
      </section>
    </article>
  );
}
