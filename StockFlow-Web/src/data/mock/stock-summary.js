import {
  CircleCheckBig,
  Package,
  TriangleAlert,
  UsersRound,
  Warehouse,
} from "lucide-react";

export const stockSummaryGreeting = {
  role: "WAREHOUSE MANAGER",
  title: "Good evening, Thanula!",
  description:
    "Monitor stock levels, review distribution requests, and manage FDO runs across all warehouses.",
  date: "Thursday, 7 October 2026",
};

export const stockOverviewItems = [
  {
    label: "Active Products",
    value: "6",
    detail: "unique SKUs tracked",
    icon: Package,
  },
  {
    label: "Remaining Stock",
    value: "9,820",
    detail: "units in warehouse",
    icon: Warehouse,
  },
  {
    label: "Delivered This Month",
    value: "1,528",
    detail: "units to outlets",
    icon: CircleCheckBig,
  },
  {
    label: "With FDOs In Progress",
    value: "225",
    detail: "units not yet returned",
    icon: UsersRound,
  },
  {
    label: "Stock Variance",
    value: "12",
    detail: "units unaccounted",
    icon: TriangleAlert,
  },
];

export const stockMovementData = [
  {
    month: "Aug 2026",
    delivered: 1528,
    issued: 2250,
    returned: 460,
    variance: 225,
    withFdos: 380,
  },
    {
    month: "Sep 2026",
    delivered: 1420,
    issued: 2600,
    returned: 305,
    variance: 250,
    withFdos: 350,
  },
];

export const stockMovementConfig = {
  delivered: { label: "Delivered", color: "#14003f" },
  issued: { label: "Issued", color: "#2a0183" },
  returned: { label: "Returned", color: "#4317d4" },
  variance: { label: "Variance", color: "#765cae" },
  withFdos: { label: "With FDOs", color: "#a785f0" },
};

export const productStockItems = [
  {
    name: "Bottled Water 1.5L",
    sku: "WTR-15L-006",
    stock: 2780,
    fdos: 0,
    variance: 0,
    status: "healthy",
  },
  {
    name: "Cooking Oil 1L",
    sku: "OIL-1L-002",
    stock: 1445,
    fdos: 60,
    variance: 12,
    status: "variance-detected",
  },
  {
    name: "Milk Powder 400g",
    sku: "MLK-400-003",
    stock: 795,
    fdos: 50,
    variance: 0,
    status: "low-stock",
  },
];

export const productStatusOptions = [
  { label: "All Statuses", value: "all" },
  { label: "Healthy", value: "healthy" },
  { label: "Low Stock", value: "low-stock" },
  { label: "Variance Detected", value: "variance-detected" },
];

export const stockUpdateWarehouseOptions = [
  { label: "Colombo Central Warehouse", value: "WH-1" },
  { label: "Kandy Regional Warehouse", value: "WH-2" },
  { label: "Galle Regional Warehouse", value: "WH-3" },
];

export const stockUpdateProductOptions = [
  { label: "Premium Rice 5kg", value: "RIC-5K-001" },
  { label: "Cooking Oil 1L", value: "OIL-1L-002" },
  { label: "Milk Powder 400g", value: "MLK-400-003" },
  { label: "Black Tea 200g", value: "TEA-200-004" },
  { label: "Laundry Soap Bar", value: "SOP-BAR-005" },
  { label: "Bottled Water 1.5L", value: "WTR-15L-006" },
];

export const warehouseOptions = [
  { label: "All Warehouses", value: "all" },
  { label: "Colombo Central Warehouse", value: "Colombo" },
  { label: "Kandy Warehouse", value: "Kandy" },
  { label: "Galle Warehouse", value: "Galle" },
];

export const monthOptions = [
  { label: "August 2026", value: "2026-08" },
  { label: "July 2026", value: "2026-09" },
  { label: "June 2026", value: "2026-10" },
];
