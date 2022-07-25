import Image from "next/image";
import { TabProps } from "../interfaces/props";

export function Tab({ icon, children, onClick }: TabProps) {
  return (
    <li
      className="tab mx-3 p-4 bg-white border-white rounded-lg drop-shadow-sm hover:border-[#1c293b] hover:cursor-pointer border-4"
      onClick={onClick}
    >
      <div className="select-none tab-icon grid justify-items-center">
        <Image
          alt="Thermometer"
          src={icon}
          width="50"
          height="50"
          layout="fixed"
        />
      </div>
      <div className="tab-name text-sm text-center select-none">{children}</div>
    </li>
  );
}
