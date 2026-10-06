import React from 'react'

import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

import { stockSummaryGreeting } from '@/data/mock/stock-summary'
import { useState } from 'react'

function GreetingBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <section className= 'relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#14003f] via-[#4317d4] to-[#765cae] px-6 py-5 text-white shadow-sm'>
            <div className='absolute -right-20 -top-24 -size-72 rounded-full bg-orange-200/15 blur-3xl' />

            <Button
                variant="ghost"
                type="button"
                size="icon-sm"
                aria-label="Dismiss greeting"
                className="absolute right-3 top-3 hover:cursor-pointer"

                onClick={() => setIsVisible(false)}><X className='size-4'/></Button>

            <div className='relative max-w-2xl'>
                <p className='text-[11px] font-semibold tracking-wide text-purple-100'>{stockSummaryGreeting.role}</p>
                <h2 className='mt-1 tracking-tight text-xl font-semibold'>{stockSummaryGreeting.title}</h2>
                <p className='mt-1.5 max-w-xl text-sm leading-5 text-purple-50'>{stockSummaryGreeting.description}</p>
                <p className='mt-2 text-xs text-purple-100'>{stockSummaryGreeting.date}</p>
            </div>
        </section>

    );
}

export default GreetingBanner
