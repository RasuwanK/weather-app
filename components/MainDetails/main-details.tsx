interface MainDetailsProps {
  Icon: JSX.Element;
  main: string | undefined;
  description: string | undefined;
}

export function MainDetails({ Icon, main, description }: MainDetailsProps) {
  return (
    <article className="main-details sm:w-[400px] w-full mt-11 grid grid-cols-1 sx:grid-cols-2 justify-items-center">
      <section className="icon">{Icon}</section>
      <section className="content">
        <h1 className="font-bold sm:text-[40px] text-center text-[50px]">
          {main}
        </h1>
        <p className="font-semibold sm:text-[20px] text-center text-[20px]">
          {description}
        </p>
      </section>
    </article>
  );
}
