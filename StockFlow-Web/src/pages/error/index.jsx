import React from 'react'

import TopNav from '@/components/top-nav/TopNav'

import { Link } from 'react-router-dom'

import { ChevronRight } from 'lucide-react'

function Error() {
    return (
        <div>
            <TopNav />

            <div>
                <div className='flex flex-col items-center justify-center mt-auto gap-2 text-center min-h-screen' >
                    <h1 className='font-bold text-4xl'>Sorry, the web page you are looking for cannot be found</h1>

                    <Link to="/" className='flex items-center gap-1 hover:underline hover:text-[#032aa1]'>
                    <p >Return back to the Home Page </p>
                    <ChevronRight className='size-4 hover:text-[#032aa1]'/>
                    </Link>
                    
                </div>
            </div>
        </div>

    )
}

export default Error
