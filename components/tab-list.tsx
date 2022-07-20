import { TabListProps } from "../interfaces/props";

export function TabList({children}:TabListProps) {
    return (
      <ul className="tab-list list-none grid grid-cols-5 gap-3 mx-4">
        {children}
      </ul>
    )
}