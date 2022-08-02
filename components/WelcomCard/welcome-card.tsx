import { Fragment } from "react";
import { LinkButton } from "../LinkButton/link-button";

interface WelcomeCardProps {
  title: string;
  icon: JSX.Element;
  description: string;
  redirect: string;
}

export function WelcomeCard({
  title,
  icon,
  description,
  redirect,
}: WelcomeCardProps) {
  return (
    <article className="w-[360px] h-[520px] grid grid-rows-ratio-1-2-1 justify-items-center items-center gap-4 p-10 grid-cols-1 rounded-[13px] bg-white/[0.61]">
      <section className="grid grid-cols-1">
        <p className="text-center font-bold text-xl">{title}</p>
      </section>
      <section className="grid grid-cols-1 gap-5 justify-items-center">
        <Fragment>{icon}</Fragment>
        <p className="text-center text-sm">{description}</p>
      </section>
      <section className="grid">
        <LinkButton href={redirect}>Get started</LinkButton>
      </section>
    </article>
  );
}
