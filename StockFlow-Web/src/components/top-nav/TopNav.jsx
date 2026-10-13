import React from 'react'

import { Button } from "../ui/button"
import { useNavigate } from 'react-router-dom'


function TopNav() {
    const navigate = useNavigate();

    return (
        <div className='sticky top-0 z-50 flex justify-between items-center h-16 bg-background border-b border-border px-6'>
            <div className='font-semibold text-foreground hover:cursor-pointer' onClick={()=> navigate("/")}>StockFlow</div>
            <Button onClick={() => navigate("/login")} className='bg-[#0735de] hover:bg-[#032aa1]'>Login</Button>
        </div>
    )
}

export default TopNav
