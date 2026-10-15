import React from 'react'

import FDOLayout from '@/layouts/FDOLayout'
import StockRequestsSection from './com/request-list/StockRequetsSection'
import StockSummaryCards from './com/summary/StockSummaryCards'

function FDOStockRequests() {
  return (
    <FDOLayout>
    <div className='mx-auto max-w-6xl w-full space-y-6 mt-3'>
      <StockSummaryCards />
      <StockRequestsSection />
    </div> 
    </FDOLayout>
  )
}

export default FDOStockRequests
