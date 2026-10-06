import { Summary, ClipboardList, PackageCheck, RotateCcw } from "lucide-react"

export const SideBarNav = [
    { label: "Stock Summary", icon: Summary, to:"/stock-summary",activePaths:["/","/stock-summary"]},
    { label: "Stock Requests", icon: ClipboardList, badge: 4, to:"/stock-requests" },
    { label: "Distribution Runs", icon: PackageCheck , to:"/distribution-runs" },
    { label: "Return Approvals", icon: RotateCcw, badge: 2 , to:"/return-approvals" },
]