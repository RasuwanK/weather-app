import { DashboardRightProps } from "../interfaces/props";
import { TabContent } from "./tab-content";
import thermoIcon from "../public/thermo.svg";
import windIcon from "../public/wind.svg";
import meter from "../public/meter.svg";
import skyIcon from "../public/sky.svg";
import locationIcon from "../public/location.svg";
import { Tab } from "./tab";
import { TabList } from "./tab-list";
import { useState } from "react";
import { Tabs } from "../enums/tabs";
import { TempTab } from "./tabs/temp-tab";
import { WindTab } from "./tabs/wind-tab";
import { GeoTab } from "./tabs/geo-tab";
import { SkyTab } from "./tabs/sky-tab";
import { PressureTab } from "./tabs/pressure-tab";

export function DashboardRight({ theme, data }: DashboardRightProps) {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.temperature);

  return (
    <section className="right grid grid-cols-1 grid-rows-right-row gap-4 font-open-sans">
      <nav
        className="tab-switcher grid grid-cols-1 items-center p-4 mx-2 rounded-md"
        style={{ backgroundColor: theme.right.bg.day }}
      >
        <TabList>
          <Tab
            onClick={() => {
              setCurrentTab(Tabs.temperature);
            }}
            icon={thermoIcon}
          >
            Temperature
          </Tab>
          <Tab
            onClick={() => {
              setCurrentTab(Tabs.wind);
            }}
            icon={windIcon}
          >
            Wind
          </Tab>
          <Tab
            onClick={() => {
              setCurrentTab(Tabs.pressure);
            }}
            icon={meter}
          >
            Pressure
          </Tab>
          <Tab
            onClick={() => {
              setCurrentTab(Tabs.sky);
            }}
            icon={skyIcon}
          >
            Sky
          </Tab>
          <Tab
            onClick={() => {
              setCurrentTab(Tabs.geography);
            }}
            icon={locationIcon}
          >
            Geography
          </Tab>
        </TabList>
      </nav>
      <TabContent
        theme={theme}
        // This order should be matched with the order of the enum
        tabs={[
          <TempTab
            temp={data?.main.temp}
            tempMax={data?.main.temp_max}
            tempMin={data?.main.temp_min}
            key={Tabs.temperature}
          />,
          <WindTab key={Tabs.wind} />,
          <PressureTab key={Tabs.pressure} />,
          <SkyTab key={Tabs.sky} />,
          <GeoTab key={Tabs.geography} />,
        ]}
        currentTab={currentTab}
      />
    </section>
  );
}
