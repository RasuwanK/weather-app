import { TabListProps } from "../interfaces/props";

export function TabList({children}:TabListProps) {
    return (
      <ul className="tab-list no-scrollbar list-none grid grid-cols-200px-5 overflow-x-scroll gap-3 mx-4">
        {children}
      </ul>
    )
}