import React from 'react'

import DefaultLayout from '@/layouts/DefaultLayout'

import ReturnApprovalTable from './com/ReturnApprovalTable'

function ReturnApprovals() {
  return (
    <DefaultLayout>
      <div className='mx-auto w-full max-w-6xl space-y-5'>
        <div className='mt-3'>
          <h1 className='font-semibold text-lg'>Return Approvals</h1>
          <p className='mt-1 text-sm text-muted-foreground'>2 returns pending warehouse verification</p>
        </div>

        <ReturnApprovalTable />
      </div>
    </DefaultLayout>
  )
}

export default ReturnApprovals
