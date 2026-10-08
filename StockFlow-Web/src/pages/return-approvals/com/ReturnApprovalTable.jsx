import React from 'react'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card,CardHeader } from '@/components/ui/card'

import { pendingReturnApprovals } from '@/data/mock/return-approvals'
import PendingVerificationTable from './pending-verification/PendingVerificationTable'
import AcceptedReturnsTable from './accepted-returns/AcceptedReturnsTable'

function ReturnApprovalTable() {
    const [view,setView] = useState("pending verification")
    const isPending = view === "pending verification"

  return (
    <Card className="gap-0 rounded-2xl py-0 shadow-none mt-3">
        <CardHeader className="border-b px-4 py-4">
            <div role='tablist' aria-label='Pending verification views' className='flex w-fit rounded-xl bg-muted p-1'>
                <Button
                type="button"
                role="tab"
                size="sm"
                variant={isPending ? "outline" : "ghost"}
                aria-selected={isPending}
                className={isPending ? "bg-background shadow-sm" : "text-muted-foreground"}
                onClick={()=> setView("pending verification")}>
                    Pending Verification 

                    <Badge className="bg-[#0735de] px-1.5 text-white">{pendingReturnApprovals.length}</Badge>
                </Button>
            </div>

            <div role='tablist' aria-label='Accepted returns views' className='flex w-fit rounded-xl bg-muted p-1'>
                <Button
                type="button"
                role="tab"
                size="sm"
                variant={!isPending ? "outline" : "ghost"}
                aria-selected={!isPending}
                className={!isPending ? "bg-background shadow-sm" : "text-muted-foreground"}
                onClick={()=>setView("accepted return")}>
                    Accepted Returns
                </Button>
            </div>
        </CardHeader>

        {isPending ? <PendingVerificationTable /> : <AcceptedReturnsTable />}
    </Card>
  )
}

export default ReturnApprovalTable
