import Image from "next/image";
import { TabProps } from "../interfaces/props";

export function Tab({icon, children}:TabProps) {
  return (
    <li className="tab grid-rows-tab-layout items-center gap-3 p-4 bg-white border-white rounded-lg drop-shadow-sm hover:border-[#1c293b] hover:cursor-pointer border-4">
      <div className="tab-icon grid justify-items-center">
        <Image
          alt="Thermometer"
          src={icon}
          width="50"
          height="50"
          layout="fixed"
          className="justify-self-center"
        />
      </div>
      <div className="tab-name text-sm text-center">{children}</div>
    </li>
  );
}
