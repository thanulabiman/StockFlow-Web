import React from 'react'

import { User } from 'lucide-react'

function SideBarProfile() {
    return (
        <div className='flex gap-3 px-4 py-4 items-center mt-auto border-t border-border'>
            <div className='flex items-center justify-center size-8 rounded-full bg-[#ccd7fc] text-[#0735de]'>
                <User className='size-4' strokeWidth={1.8}/>
            </div>
            
            <div className='leading-tight'>
                <div className='truncate text-xs font-medium text-foreground'>Thanula Biman</div>
                <div className='truncate mt-0.5 text-[11px] text-muted-foreground '>Warehouse Manager</div>
                <div className='truncate mt-0.5 text-[10px] text-muted-foreground'>Colombo Central Warehouse</div>
            </div>
        </div>
    )
}

export default SideBarProfile
