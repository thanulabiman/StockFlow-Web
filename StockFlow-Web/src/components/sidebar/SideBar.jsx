import React from 'react'

import { SideBarHeader,SideBarNav,SideBarProfile } from './com'

import { SideBarNav as sidebarnav} from '@/data/Nav'

function SideBar() {
  return (
    <div className='flex flex-col w-60 border-r border-border bg-background'>
      <SideBarHeader />
      <SideBarNav  items={sidebarnav}/>
      <SideBarProfile />
    </div>
  )
}

export default SideBar
