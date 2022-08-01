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
    <article className="grid grid-rows-ratio-1-2-1 grid-cols-1 rounded-[13px] bg-white/[0.61]">
      <section>{title}</section>
      <section>
        <Fragment>{icon}</Fragment>
        <p>{description}</p>
      </section>
      <section>
        <LinkButton href={redirect}>Get started</LinkButton>
      </section>
    </article>
  );
}
