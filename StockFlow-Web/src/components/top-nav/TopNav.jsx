import React from 'react'

import { Button } from "../ui/button"
import { useNavigate } from 'react-router-dom'


function TopNav() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center h-16 bg-gray-200 border-b border-b-gray-400 px-6'>
            <div className='font-semibold text-foreground'>StockFlow</div>
            <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
    )
}

export default TopNav
