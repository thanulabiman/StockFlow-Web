import React from 'react'

import { SideBarHeader, SideBarNav, SideBarProfile } from './com'


function SideBar({ nav, profile, header }) {
  return (
    <div className='sticky top-0 h-screen z-40 flex flex-col w-60 border-r border-border bg-background'>
      <SideBarHeader header={header} />
      <SideBarNav items={nav} />
      <SideBarProfile profile={profile} />
    </div>
  )
}

export default SideBar
