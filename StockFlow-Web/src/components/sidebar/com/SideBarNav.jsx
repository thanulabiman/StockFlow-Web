import React from 'react'

import { SideBarNav as SideBarNavData } from '../../../data/Nav';

function SideBarNavItem({ item }) {
    const { badge, icon: Icon, label } = item;

    return (

        <li>
            <div className='flex items-center gap-3 px-3 text-left text-sm font-medium w-full h-11'>
                <Icon className='size-4 shrink-0' />
                <span>{label}</span>
                {badge && <span className='ml-auto bg-[#0735de] text-white px-1.5 py-0 rounded-full text-[11px] font-semibold'>{badge}</span>}
            </div>
        </li>
    )
}

function SideBarNav() {
    return (
        <ul>
            {SideBarNavData.map((item) => (<SideBarNavItem item={item} />))}
        </ul>
    );
}

export default SideBarNav
