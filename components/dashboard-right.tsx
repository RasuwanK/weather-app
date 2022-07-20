import { DashboardRightProps } from "../interfaces/props";
import { TabContent } from "./tab-content";
import { TabSwitcher } from "./tab-switcher";

export function DashboardRight({ theme }: DashboardRightProps) {
  return (
    <section className="right grid grid-cols-1 grid-rows-right-row gap-4 font-open-sans">
      <TabSwitcher theme={theme} />
      <TabContent theme={theme} />
    </section>
  );
}
