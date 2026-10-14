import React from 'react'

import { Button } from "../ui/button"
import { useNavigate,useLocation } from 'react-router-dom'
import ViewSwitchButton from './ViewSwitchButton';
import { routes } from '@/data/routes';


function TopNav() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const pageTitle = routes.find(({route})=> route === pathname)?.title

    return (
        <div className='sticky top-0 z-50 flex justify-between items-center h-16 bg-background border-b border-border px-6'>
            <div className='font-semibold text-foreground hover:cursor-pointer' onClick={() => navigate("/")}>{pageTitle}</div>

            <div className='ml-auto flex shrink-0 items-center gap-2'>
                <ViewSwitchButton />
                <Button onClick={() => navigate("/login")} className='bg-[#0735de] hover:bg-[#032aa1]'>Login</Button>
            </div>

        </div>
    )
}

export default TopNav
