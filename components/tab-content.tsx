import { TabContentProps } from "../interfaces/props";
import { Fragment } from "react";

export function TabContent({ theme, tabs, currentTab }: TabContentProps) {
  return (
    <article
      className="tab-content xl:mx-2 xl:rounded-md p-4 grid grid-cols-1"
      style={{
        backgroundColor: theme.right.bg.day,
        color: theme.right.fg.day,
      }}
    >
      {/*<header className="tab-title">
        <h2 className="tab-title-text text-2xl text-center">Temperature</h2>
    </header>*/}
      <Fragment>{tabs[currentTab]}</Fragment>
    </article>
  );
}
