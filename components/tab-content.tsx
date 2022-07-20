import { TabContentProps } from "../interfaces/props";

export function TabContent({ theme }:TabContentProps) {
  return (
    <article
      className="tab-content mx-2 rounded-md p-4"
      style={{
        backgroundColor: theme.right.bg.day,
        color: theme.right.fg.day,
      }}
    >
      <header className="tab-title">
        <h2 className="tab-title-text text-2xl text-center">Temperature</h2>
      </header>
    </article>
  );
}
