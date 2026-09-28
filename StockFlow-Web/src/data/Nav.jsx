import { Summary,ClipboardList,PackageCheck,RotateCcw } from "lucide-react"

export const SideBarNav = [
    { label: "Stock Summary", icon:Summary },
    { label: "Stock Requests", icon:ClipboardList, badge:4 },
    { label: "Distribution Runs", icon:PackageCheck },
    { label: "Return Approvals", icon:RotateCcw ,badge:2},
]