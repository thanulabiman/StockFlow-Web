import React from 'react'

import SMLayout from '@/layouts/SMLayout'

import { distributionRuns } from '@/data/mock/distribution-runs'
import DistributionRunsTable from './com/DistributionRunsTable'

function DistributionRuns() {
const closedRunCount = distributionRuns.filter((run)=> run.status === "closed").length;
const activeRunCount = distributionRuns.length - closedRunCount;

  return (
    <SMLayout>
      <div className='mx-auto max-w-6xl space-y-5'>
        <div className='mt-3'>
          <h1 className='text-lg font-semibold'>Distribution Runs</h1>
          <p className='mt-1 text-sm text-muted-foreground'>
            {activeRunCount} Active runs - {closedRunCount} Closed 
          </p>
        </div>

        <DistributionRunsTable />
      </div>
    </SMLayout>
  )
}

export default DistributionRuns
