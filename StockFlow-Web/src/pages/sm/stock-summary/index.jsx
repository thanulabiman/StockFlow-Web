import React from 'react'

import SMLayout from '@/layouts/SMLayout'

import StockSummaryFilters from './com/StockSummaryFilters'
import GreetingBanner from './com/GreetingBanner'
import StockOverview from './com/StockOverview'
import MonthlyStockMovement from './com/MonthlyStockMovement'
import ProductStock from './com/ProductStock'

function StockSummary() {
  return (
    <SMLayout>
      <StockSummaryFilters />
      <GreetingBanner />
      <StockOverview />
      <MonthlyStockMovement />
      <ProductStock />
    </SMLayout>
  )
}

export default StockSummary
