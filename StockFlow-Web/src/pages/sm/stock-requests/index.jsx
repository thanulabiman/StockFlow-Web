import React from 'react'

import SMLayout from '@/layouts/SMLayout'

import { pendingStockRequests } from '@/data/mock/stock-requests'
import StockRequestsTable from './com/StockRequestsTable'

function StockRequets() {
  return (
    <SMLayout>
      <div className='mx-auto w-full max-w-6xl space-y-5'>
        <div>
          <h1 className='mt-3 text-lg font-semibold'>Stock Requests</h1>
          <p className='mt-1 text-muted-foreground text-sm'>{pendingStockRequests.length} pending requests awaiting decision</p>
        </div>

      <StockRequestsTable />
      </div>
    </SMLayout>
  )
}

export default StockRequets
