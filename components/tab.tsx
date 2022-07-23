import Image from "next/image";
import { TabProps } from "../interfaces/props";

export function Tab({icon, children, onClick}:TabProps) {
  return (
    <li className="tab grid-rows-tab-layout w-full items-center gap-3 p-4 bg-white border-white rounded-lg drop-shadow-sm hover:border-[#1c293b] hover:cursor-pointer border-4">
      <div className="w-full select-none tab-icon grid justify-items-center" onClick={onClick}>
        <Image
          alt="Thermometer"
          src={icon}
          width="50"
          height="50"
          layout="fixed"
        />
      </div>
      <div className="tab-name min-w-full text-sm text-center select-none">{children}</div>
    </li>
  );
}
