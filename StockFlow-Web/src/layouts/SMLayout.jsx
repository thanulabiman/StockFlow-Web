import React from 'react'

import TopNav from '../components/top-nav/TopNav'

import SideBar from '../components/sidebar/SideBar'
import { sidebarHeaderSM, SideBarNavSM} from '@/data/sidebar/sidebar_nav_sm'


function SMLayout({ children }) {
    return (
        <div className='flex flex-row min-h-screen'>
            <SideBar nav={SideBarNavSM} header={sidebarHeaderSM} />

            <div className='flex-1 bg-mist-100'>
                <TopNav />
                <div className='px-6'>{children}
                </div>
            </div>
        </div>
    )
}

export default SMLayout
