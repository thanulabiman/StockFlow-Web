import React from 'react'

import TopNav from '../components/top-nav/TopNav'

import SideBar from '../components/sidebar/SideBar'
import { sidebarHeaderFDO, sidebarNavFDO } from '@/data/sidebar/sidebar_nav_fdo'

function FDOLayout({ children }) {
  return (
        <div className='flex flex-row min-h-screen'>
            <SideBar nav={sidebarNavFDO} header={sidebarHeaderFDO}/>

            <div className='flex-1 bg-mist-100'>
                <TopNav />
                <div className='px-6'>{children}
                </div>
            </div>
        </div>
    )
}
export default FDOLayout
