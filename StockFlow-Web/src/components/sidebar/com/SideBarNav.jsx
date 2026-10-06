import { NavLink,useLocation } from "react-router-dom";

import { cn } from "cn";

function SideBarNavItem({ item }) {
    const {pathname}=useLocation();

    const { badge, icon: Icon, label, to ,activePaths=[item.to]}=item

    const isActive = activePaths.includes(pathname);

    return (

        <li>
            <NavLink to={to} className={cn({'flex items-center gap-3 px-3 text-left text-sm font-medium w-full h-11':true,
                "text-muted-foreground hover:bg-muted hover:text-foreground":true,
                "bg-[#ccd7fc] text-[#0735de] hover:bg-[#c9d2f3] hover:text-[#0735de]": isActive
            })}>
                <Icon className='size-4 shrink-0' />
                <span>{label}</span>
                {badge && <span className='ml-auto bg-[#0735de] text-white px-1.5 py-0 rounded-full text-[11px] font-semibold'>{badge}</span>}
            </NavLink>
        </li>
    )
}

function SideBarNav({items}) {
    return (
        <nav aria-label='Primary-navigation' className='px-3 py-4'>
            <ul className='space-y-1'>
                {items.map((item) => (<SideBarNavItem key={item.label} item={item} />))}
            </ul>
        </nav>

    );
}

export default SideBarNav
