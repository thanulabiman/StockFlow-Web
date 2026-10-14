import React from 'react'

import { ArrowLeftRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { Button } from '../ui/button';

function ViewSwitchButton() {
    const { pathname } = useLocation();
    const isFdoView = pathname.startsWith("/fdo");

    return (
        <Button
            type="button"
            variant='outline'
            aria-label={`Switch to ${isFdoView ? "Warehouse" : "FDO"} view`}
            title={`Switch to ${isFdoView ? "Warehouse" : "FDO"}view`}
            onClick={() => window.location.replace(isFdoView ? "/" : "/fdo")}
            className="gap-2 rounded-lg borber-border bg-white px-2.5 text-sm font-semibold text-[#010825] shadow-none hover:bg-muted/80"
        >
            <span aria-hidden="true" className='size-2.5 rounded-full bg-[#0735de]' />
            <span className='hidden sm:inline'>{isFdoView ? "FDO view" : "SM view"}</span>
            <span className='sm:hidden'>{isFdoView ? "FDO" : "SM"}</span>
            <ArrowLeftRight aria-hidden="true" className='size-4' />
        </Button>

    )
}

export default ViewSwitchButton
