import React from 'react'

import { SideBarHeader,SideBarNav,SideBarProfile } from './com'


function SideBar() {
  return (
    <div className='flex flex-col w-60 border-r border-border bg-background'>
      <SideBarHeader />
      <SideBarNav />
      <SideBarProfile />
    </div>
  )
}

export default SideBar
