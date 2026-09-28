import React from 'react'

import { BarChart } from 'lucide-react'

function SideBarHeader() {
    return (
        <div className='flex gap-3 h-16 items-center px-5 border-b border-border '>
            <div className='flex items-center justify-center rounded-lg size-8 bg-[#0735de] text-white shadow-m'>
                <BarChart className='size-4' strokeWidth={2.25}/>
            </div>
            <div className='leading-tight' >
                <p className='text-sm font-semibold text-foreground'>StockFlow</p>
                <p className='text-[11px] text-muted-foreground'>Distribution System</p>
            </div>
        </div>
    )
}

export default SideBarHeader
