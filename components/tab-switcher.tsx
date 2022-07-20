import thermoIcon from "../public/thermo.svg";
import windIcon from "../public/wind.svg";
import meter from "../public/meter.svg";
import skyIcon from "../public/sky.svg";
import locationIcon from "../public/location.svg";
import { Tab } from "./tab";
import { TabList } from "./tab-list";
import { TabSwitcherProps } from "../interfaces/props";

export function TabSwitcher({ theme }:TabSwitcherProps) {
  return (
    <nav
      className="tab-switcher grid grid-cols-1 items-center p-4 mx-2 rounded-md"
      style={{ backgroundColor: theme.right.bg.day }}
    >
      <TabList>
        <Tab icon={thermoIcon}>Temperature</Tab>
        <Tab icon={windIcon}>Wind</Tab>
        <Tab icon={meter}>Pressure</Tab>
        <Tab icon={skyIcon}>Sky</Tab>
        <Tab icon={locationIcon}>Geography</Tab>
      </TabList>
    </nav>
  );
}
