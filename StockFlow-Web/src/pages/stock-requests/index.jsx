import React from 'react'

import DefaultLayout from '@/layouts/DefaultLayout'

import { pendingStockRequests } from '@/data/mock/stock-requests'
import StockRequestsTable from './com/StockRequestsTable'

function StockRequets() {
  return (
    <DefaultLayout>
      <div>
        <div>
          <h1>Stock Requests</h1>
          <p>{pendingStockRequests.length} pending requests awaiting decision</p>
        </div>

      <StockRequestsTable />
      </div>
    </DefaultLayout>
  )
}

export default StockRequets
