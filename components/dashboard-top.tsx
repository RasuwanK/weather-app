import { DashboardTopProps } from "../interfaces/props"

export function DashboardTop({children}:DashboardTopProps) {
    return (
        <header className="">
            {children}
        </header>
    )
}