import React from 'react'

import { Select, SelectTrigger, SelectGroup, SelectItem, SelectValue, SelectContent, SelectLabel} from "@/components/ui/select"
import { monthOptions, warehouseOptions } from '@/data/mock/stock-summary'

function StockSummaryFilters() {
    return (
        <div className='flex flex-wrap items-center justify-end gap-3 py-3'>
            <Select items={warehouseOptions} defaultValue="all">
                <SelectTrigger className="w-full sm:min-w-60 sm:w-auto">
                    <SelectValue placeholder="Select a Warehouse"/>
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Warehouses</SelectLabel>
                        {warehouseOptions.map((item) => (
                            <SelectItem key={item.value} value={item.value}>{item.value}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select items={monthOptions} defaultValue="2026-08">
                <SelectTrigger className="w-full sm:min-w-60 sm:w-auto">
                    <SelectValue placeholder="Select a Month"/>
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Months</SelectLabel>
                        {monthOptions.map((item)=> (
                            <SelectItem key={item.value} value={item.value}>{item.value}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default StockSummaryFilters
