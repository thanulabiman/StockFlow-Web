import React from 'react'

import TopNav from '../components/top-nav/TopNav'

import SideBar from '../components/sidebar/SideBar'

function DefaultLayout({ children }) {
    return (
        <div className='flex flex-row min-h-screen'>
            <SideBar />

            <div className='flex-1 bg-mist-100'>
                <TopNav />
                <div className='px-6'>{children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
